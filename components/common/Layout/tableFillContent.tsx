/* This example requires Tailwind CSS v2.0+ */


interface tableType {
    tableMode: any;
}
function TableFillContent(props: tableType) {
    const { tableMode } = props;
    
    
    // export default function AbsenceFormTable(props: AbsenceFormTableProps) {
    //     const { absenceForms } = props;
    //     const getTypeOfAbsence = (typeOfAbsence: any) => {
    //         for (const key in typeOfAbsence) {
    //             if (typeOfAbsence[key] === true) {
    //                 return JSON.parse(absenceForms.form_schema.form_schema).properties.type_of_absence
    //                     .properties[key].title;
    //             }
    //         }
    //     };

    return (
        <div className='mb-6'>
            <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Pill Content components限定*</label>
            {tableMode===true ? (
                <div>
                    {tableMode}
                    <input type="file" id="content" accept="image/*" />
                </div>)
                : (
                    <div>
                        {tableMode}
                        <textarea id="content" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                    </div>)
            }
        </div>
    );
}

export default TableFillContent;
