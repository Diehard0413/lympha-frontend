export class WebSocketService {
    private ws: WebSocket | null = null;
    private reconnectAttempts = 0;
    private maxReconnectAttempts = 5;
    private reconnectInterval = 3000; // 3 seconds
    private pingInterval: NodeJS.Timeout | null = null;
    private url: string;
    private messageHandlers: ((data: any) => void)[] = [];

    constructor(url: string) {
        this.url = url;
        this.connect();
    }

    private connect() {
        try {
            this.ws = new WebSocket(this.url);
            this.setupEventListeners();
            this.startPingInterval();
        } catch (error) {
            console.error('WebSocket connection error:', error);
            this.scheduleReconnection();
        }
    }

    private setupEventListeners() {
        if (!this.ws) return;

        this.ws.onopen = () => {
            console.log('WebSocket connected');
            this.reconnectAttempts = 0; // Reset reconnect attempts on successful connection
        };

        this.ws.onclose = (event) => {
            console.log('WebSocket closed:', event.code, event.reason);
            this.stopPingInterval();
            this.scheduleReconnection();
        };

        this.ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        this.ws.onmessage = (event) => {
            console.log("onmessage", event);
            try {
                const data = JSON.parse(event.data);
                this.messageHandlers.forEach(handler => handler(data));
            } catch (error) {
                console.error('Error parsing message:', error);
            }
        };
    }

    private scheduleReconnection() {
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.reconnectAttempts++;
            const delay = this.reconnectInterval * Math.pow(1.5, this.reconnectAttempts - 1);
            console.log(`Attempting to reconnect in ${delay}ms... (Attempt ${this.reconnectAttempts})`);

            setTimeout(() => {
                this.connect();
            }, delay);
        } else {
            console.error('Max reconnection attempts reached');
            // You might want to implement a full page reload or show an error message to the user
        }
    }

    // Keep connection alive with ping/pong
    private startPingInterval() {
        this.pingInterval = setInterval(() => {
            this.sendPing();
        }, 30000); // Send ping every 30 seconds
    }

    private stopPingInterval() {
        if (this.pingInterval) {
            clearInterval(this.pingInterval);
            this.pingInterval = null;
        }
    }

    private sendPing() {
        this.send({ type: 'ping' });
    }

    public addMessageHandler(handler: (data: any) => void) {
        this.messageHandlers.push(handler);
    }

    public removeMessageHandler(handler: (data: any) => void) {
        this.messageHandlers = this.messageHandlers.filter(h => h !== handler);
    }

    public send(data: any) {
        if (this.ws?.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(data));
        } else {
            console.warn('WebSocket is not connected. Message not sent:', data);
        }
    }

    public disconnect() {
        this.stopPingInterval();
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
    }
}