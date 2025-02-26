"use server"

import { auth } from "@clerk/nextjs/server"

export const getAurinkoAuthUrl = async (serviceType: 'Google' | 'Github') => {
    const {userId} = await auth()
    if (!userId) throw new Error("Unauthorized")

        const params = new URLSearchParams({
            clientId: process.env.AURINKO_CLIENT_ID as string,
            serviceType,
            scope: 'Mail.Read Mail.ReadWrite Mail.Send Mail.Drafts Mail.All',
            responseType: 'code',
            returnUrl: '${process.evn.NEXT_PUBLIC_URL}/api/aurinko/callback'

        })

        return 'https://api.aurinko.io/v1/auth/authorize?${params.toString()}'
}
