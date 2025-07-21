import { searchKey } from "@/types/zod";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

interface SearchBoxProps {
    label: string,
    tableData: searchKey[],
    setFilterSearch: React.Dispatch<React.SetStateAction<searchKey[]>>
}

export default function SearchBox({ label, tableData, setFilterSearch }: SearchBoxProps) {

    const flattenObjectToString = (obj: any): string => {
        let result = ''

        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                const value = obj[key]

                if (typeof value === 'object' && value !== null) {
                    result += '' + flattenObjectToString(value)
                } else if (typeof value === 'string' || typeof value === 'number') {
                    result += '' + value.toString()
                }
            }
        }
        return result.toLocaleLowerCase()
    }

    const searchData = (search: React.ChangeEvent<HTMLInputElement>) => {
        const result = search.target.value.toLowerCase()

        const filteredRecords = tableData.filter(record => {
            const recordString = flattenObjectToString(record)
            return recordString.includes(result)
        })

        setFilterSearch(filteredRecords || [])
    }

    return (
        <div className="border-teal-500 border-2 mb-6 flex">
            <MagnifyingGlassIcon className="bg-teal-500 w-8 text-white inline-block" />

            <input
                id="search"
                type="search"
                onChange={searchData}
                placeholder={`Buscar ${label}`}
                className="px-2 border-none w-full"
            />
        </div>
    )
}
