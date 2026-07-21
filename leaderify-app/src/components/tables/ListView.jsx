import ListItem from "../ListItem";

export default function ListView({items}){
    const placeholderData = []
    for (let i = 0; i < 50; i++) {
        placeholderData.push(1)
        
    }
    return (
        <>
            <div className="h-full w-full max-w-[75%] max-h-[85%] lg:max-h-[90%] [@media(max-height:700px)]:max-h-[75%] 
                rounded-sm border border-mauve-500 overflow-y-auto text-sm">
                <ul className="flex flex-col gap-2">
                    {placeholderData.map((item,index) => <ListItem key={index} bgColor={index % 2 == 0 ? "bg-mauve-700" : "bg-mauve-600"}/>)}
                </ul>
            </div>
        </>
    );
}