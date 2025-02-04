import React from 'react'
import {
    Card,
    CardContent,
    CardTitle,
    CardDescription,
    CardFooter, CardHeader
} from '@/components/ui/card'
import Image from 'next/image'
import { UserRound } from 'lucide-react'

const UserCard = ({ type }: { type: string }) => {
    return (
        <Card className='rounded-2xl odd:bg-blue-700 even:bg-slate-700 p-4 flex-1 min-[132px]:'>
            <CardHeader className='flex justify-between w-full flex-col'>
                <CardTitle className='text-2xl'>
                    {type[0].toLocaleUpperCase()}{type.slice(1)}
                </CardTitle>
                <div className='flex justify-between items-center'>
                    <span className='text-[10px] px-2 py-1 rounded-full text-green-900'>2025</span>
                    <Image src='/more.png' alt='more' width={20} height={20} />
                </div>
                <CardDescription>
                    <p>Sobre: {' '}
                        {type[0].toLocaleUpperCase()}{type.slice(1)}
                    </p>
                </CardDescription>

            </CardHeader>
            <CardContent className='flex justify-between items-center'>
                <UserRound /> <span className='text-2xl font-semibold py-4'>1245</span>
            </CardContent>
            <CardFooter className='mt-auto mb-0 flex items-center justify-center'>
                <h3 className='capitalize text-sm'>{type}</h3>
            </CardFooter>
        </Card>
    )
}

export default UserCard