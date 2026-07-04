import React from 'react'
import InnerComp from './InnerComp'

function Right() {
    return (
        <div className=' w-5/10 h-full bg-white rounded-tr-4xl rounded-br-4xl'>
            <section className='w-full h-2/10'>
                <h1 className='p-8 text-2xl font-bold'>Summary</h1>
            </section>
            <section className='w-full h-8/10 flex flex-col justify-around items-center'>
                <InnerComp image={'assets/images/icon-reaction.svg'} name={'Reaction'} info={'80/100'} Color="hsl(0, 100%, 67%, 30%)" />
                <InnerComp image={'assets/images/icon-memory.svg'} name={'Memory'} info={'96/100'} Color="hsl(39, 100%, 56%, 30%)" />
                <InnerComp image={'assets/images/icon-verbal.svg'} name={'Varbal'} info={'61/100'} Color="hsl(166, 100%, 37%, 30%)" />
                <InnerComp image={'assets/images/icon-visual.svg'} name={'Visual'} info={'73/100'} Color="hsl(234, 85%, 45%, 30%)" />
                <button className='w-75 h-10 bg-blue-800 rounded-4xl p-2 text-white'>Continue</button>
            </section>
        </div>
    )
}

export default Right
