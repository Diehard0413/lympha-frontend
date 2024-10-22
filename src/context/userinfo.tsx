"use client";

import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { getUser } from "@/actions/project";

type UserData = {
    _id: string,
    email: string,
    letAmount: number,
    lctAmount: number,
    userWalletId: string,
    userWalletKey: string
}

type UserInfoContent = {
    userData: UserData,
    setUserData: Function,
}

const UserInfoContext = createContext<UserInfoContent>({
    userData: {
        _id: "",
        email: "",
        letAmount: 0,
        lctAmount: 0,
        userWalletId: "",
        userWalletKey: ""
    },
    setUserData: () => { }
});

export default function UserInfoProvider({ children }: PropsWithChildren) {

    const session = useSession();
    const user = session.data?.user;

    const [userData, setUserData] = useState<UserData>({
        _id: "",
        email: "",
        letAmount: 0,
        lctAmount: 0,
        userWalletId: "",
        userWalletKey: ""
    });

    useEffect(() => {
        const fetchUser = async () => {
            if (user?.email) {
                const response = await getUser(user.email);
                const userData = response.data;
                console.log(userData);
                setUserData(userData);
            }
        }

        fetchUser();
    }, []);

    return <UserInfoContext.Provider value={{
        userData,
        setUserData
    }}>
        {children}
    </UserInfoContext.Provider>
}

export function useUserInfoContext() {
    return useContext(UserInfoContext);
}