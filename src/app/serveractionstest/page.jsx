import {sayHello} from "@/lib/actions"

const ServerActionTestPage = () => {
    return(
        <div>
            <form action={sayHello}>
                <input type="text" placeholder="title"></input>
                <input type="text" placeholder="desc"></input>
                <input type="text" placeholder="slug"></input>
                <input type="text" placeholder="userId"></input>
                <button>Create</button>
            </form>
        </div>
    )
}

export default ServerActionTestPage;