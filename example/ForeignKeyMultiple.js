import React, {useCallback} from 'react';
import {useState, none} from '@hookstate/core';
import {MaterialFormForeignKeyMultiple} from '../form/MaterialFormForeignKeyMultiple';
import {createStore} from '../stores/Store';
import {getAPI} from '../common/Routes';
import Tables from '../common/Tables';

/**
 * default valeu not ready
 */
export const TestForeignKeyMultiple = ()=>{
    var form = useState(createStore("form", {
        name_plural: "rows",
        should_fetch: false,
        should_load: false,
        schema: {
            title: "test",
            type: "object",
            description: "test",
            required: [],
            properties: {
                foreignkeymulti: {
                    title: "MaterialFormForeignKeyMultiple",
                    type: "array",
                    url: getAPI({
                        name: 'anno',
                        table: Tables["applications"],
                        level: 'organization',
                        sid: "ehkn0a40x1glqvAFKP",
                        serializer: 'name',
                        get: "page_size=5"
                    }),
                    enum: [],
                    enumNames: [],
                    widget: "MaterialFormForeignKeyMultiple"
                },
                foreignkeymulti_default: {
                    title: "Default",
                    type: "array",
                    url: getAPI({
                        name: 'anno',
                        table: Tables["applications"],
                        level: 'organization',
                        sid: "ehkn0a40x1glqvAFKP",
                        serializer: 'name',
                        get: "page_size=5"
                    }),
                    enum: [],
                    enumNames: [],
                    widget: "MaterialFormForeignKeyMultiple",
                    default: [
                        {sid:"nqtw0a40xapuzEJOTY",name:"ELISA Data Analysis"}
                    ]
                },
                foreignkeymulti_data: {
                    title: "Data",
                    type: "array",
                    url: getAPI({
                        name: 'anno',
                        table: Tables["applications"],
                        level: 'organization',
                        sid: "ehkn0a40x1glqvAFKP",
                        serializer: 'name',
                        get: "page_size=5"
                    }),
                    enum: [],
                    enumNames: [],
                    widget: "MaterialFormForeignKeyMultiple"
                },
                foreignkeymulti_nourl: {
                    title: "No URL",
                    type: "array",
                    url: "",
                    enum: [{sid: 1, name: 1}, {sid: 2, name: 2}, {sid: 3, name: 3}],
                    enumNames: [1, 2, 3],
                    widget: "MaterialFormForeignKeyMultiple",
                },
            },
        },
        data: {
            foreignkeymulti_data: [
                {sid:"nqtw0a40xapuzEJOTY",name:"ELISA Data Analysis"},
                {sid: 'ehkn0a40x1glqvAFKP', name: 'Electronic Lab Notebook (ELN)'}
            ]
        }
    }));

    const handleChange = useCallback(()=>{
        form.schema.properties.foreignkeymulti.url.set(getAPI({
            name: 'anno',
            table: Tables["applications"],
            level: 'organization',
            sid: "ehkn0a40x1glqvAFKP",
            serializer: 'name',
            get: "page_size=10"
        }))
        form.schema.properties.foreignkeymulti.title.set("Changed");
        // push data in
        form.data.foreignkeymulti.set(
            [{sid:"nqtw0a40xapuzEJOTY",name:"ELISA Data Analysis"}]
        )
        form.schema.properties.foreignkeymulti.loaded.set(p => p+1)
    }, [form])

    const handleClear = useCallback(()=>{
        form.schema.properties.foreignkeymulti_data.title.set("Cleared")
        form.data.foreignkeymulti_data.set(none);
    }, [form])


    return (
        <div style={{padding: 20}}>
            <MaterialFormForeignKeyMultiple
                form={form}
                name="foreignkeymulti"
                field={form.schema.properties.foreignkeymulti}
            />
            <MaterialFormForeignKeyMultiple
                form={form}
                name="foreignkeymulti_default"
                field={form.schema.properties.foreignkeymulti_default}
            />
            <MaterialFormForeignKeyMultiple
                form={form}
                name="foreignkeymulti_data"
                field={form.schema.properties.foreignkeymulti_data}
            />
            <MaterialFormForeignKeyMultiple
                form={form}
                name="foreignkeymulti_nourl"
                field={form.schema.properties.foreignkeymulti_nourl}
            />
            <button className="btn" onClick={handleChange}>Change</button>
            <button className="btn" onClick={handleClear}>Clear</button>
        </div>
    );
}

export default TestForeignKeyMultiple;
