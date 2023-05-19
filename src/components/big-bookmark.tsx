interface Props {
    url: string,
    icon: string,
    screenshot: string,
    name: string
}

const BigBookmark: React.FC<Props> = (props)=>{
    return (
        <a href={props.url} target='_blank' className="block transition relative w-full h-auto rounded overflow-hidden hover:shadow-xl hover:shadow-slate-300">
            <img src={props.screenshot} alt="" className='w-full h-auto' />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 to-black/50'>
                <div className=' absolute left-4 bottom-4 flex items-center gap-2 text-white'>
                    <div className='bg-white rounded w-10 h-10 p-2'>
                        <img src={props.icon} alt="" className='w-full h-full' />
                    </div>
                    <div>
                        <div className=' text-lg'>{props.name}</div>
                        <div className=' text-xs'>{props.url}</div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default BigBookmark