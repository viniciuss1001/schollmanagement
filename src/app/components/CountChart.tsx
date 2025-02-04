'use client'
import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardDescription,
    CardFooter,
    CardTitle
} from '@/components/ui/card'
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent
} from '@/components/ui/chart'

import Image from 'next/image'
import { chartDataExample as chartData } from './LinksMenu'

import { chartCircleDataExample } from './LinksMenu'

const CountChart = () => {
    return (
        <Card>
            <CardHeader>
                <div className='flex justify-center items-center'>
                    <h1>Estudantes</h1>
                    <Image src='/more.png' alt='Alunos' width={20} height={20} />
                </div>
            </CardHeader>
            <CardContent>
                <div>

                </div>
            </CardContent>
            <div>

            </div>
        </Card>
    )
}

export default CountChart