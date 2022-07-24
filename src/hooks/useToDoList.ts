import { Todo } from "../types";
import { useMemo } from "react";

function useFilterByQuery (list: Todo[], query: string):Todo[] {
    const filteredList = useMemo(()=>{
        if (!query) return list
        return list.filter(todo => todo.description.toLowerCase().includes(query.toLowerCase()))
    }, [list, query])
    return filteredList
}

export function useFilterByAllFilters (list:Todo[], query: string, showOnlyCompleted: boolean):Todo[] {
    const filteredByQuery = useFilterByQuery(list, query)

    const filteredList = useMemo(()=>{
        if(!showOnlyCompleted) return filteredByQuery
        return filteredByQuery.filter(todo => todo.completed)
    }, [filteredByQuery, showOnlyCompleted])

    return filteredList
}