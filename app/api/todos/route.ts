import { NextResponse } from "next/server";

let todos = [
    {id: 1, name: "Todo 1"},
    {id: 2, name: "Todo 2"},
    {id: 3, name: "Todo 3"}
];

export async function GET() {
   return NextResponse.json({todos})
}

export async function DELETE(request: Request) {
    const data = await request.json()
    todos = todos.filter((t) => t?.id !== data?.id)
   return NextResponse.json({todos})
}

export async function POST(request: Request) {
    const data = await request.json()
    todos.push({
        id: todos?.length+1,
        name: data?.todoName
    })
   return NextResponse.json({todos})
}