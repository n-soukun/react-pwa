interface Props {
    data: {
        img: string,
        url: string,
        blank: boolean
    }[]
}

const SideAppBar: React.FC<Props> = (props)=>{
    return(
    <div className='fixed bottom-0 left-0 flex justify-center gap-2 p-2 border-t w-full bg-white sm:flex-col sm:justify-start sm:w-auto sm:h-[calc(100vh-61px)] sm:border-t-0 sm:border-r border-slate-100 z-50'>
        {props.data.map(d=>(
            <a href={d.url} target={d.blank?"_blank":""} className='block p-2 rounded hover:bg-slate-100' rel="noreferrer">
                <img src={d.img} alt="" className=' w-8 h-8'/>
            </a>
        ))}
    </div>
    )
}

export default SideAppBar