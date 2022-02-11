import React, {useCallback} from 'react';
import {useState, none} from '@hookstate/core';
import {MaterialFormForeignKey} from '../form/MaterialFormForeignKey';
import {createStore} from '../stores/Store';
import {getAPI} from '../common/Routes';
import Tables from '../common/Tables';

/**
 * default valeu not ready
 */
export const TestForeignKey = ()=>{
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
                foreignkey: {
                    title: "MaterialFormForeignKey",
                    type: "string",
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
                    widget: "MaterialFormForeignKey"
                },
                foreignkey_default: {
                    title: "Default",
                    type: "string",
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
                    widget: "MaterialFormForeignKey",
                    default: {sid:"nqtw0a40xapuzEJOTY",name:"ELISA Data Analysis"}
                },
                foreignkey_data: {
                    title: "Data",
                    type: "string",
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
                    widget: "MaterialFormForeignKey",
                },
                foreignkey_nourl: {
                    title: "No URL",
                    type: "string",
                    url: "",
                    enum: [{sid: 1, name: 1}, {sid: 2, name: 2}, {sid: 3, name: 3}],
                    enumNames: [1, 2, 3],
                    widget: "MaterialFormForeignKey",
                },
            },
        },
        data: {
            foreignkey_data: {sid:"nqtw0a40xapuzEJOTY",name:"ELISA Data Analysis"},
        }
    }));

    const handleChange = useCallback(()=>{
        form.schema.properties.foreignkey.url.set(
            getAPI({
                name: 'anno',
                table: Tables["applications"],
                level: 'organization',
                sid: "ehkn0a40x1glqvAFKP",
                serializer: 'name',
                get: "page_size=10"
            })
        )
        form.schema.properties.foreignkey.title.set("Changed");
        // push data in
        form.data.foreignkey.set(
            {sid:"nqtw0a40xapuzEJOTY",name:"ELISA Data Analysis"}
        )
        form.schema.properties.foreignkey.loaded.set(p => p+1)
    }, [form])

    const handleClear = useCallback(()=>{
        form.schema.properties.foreignkey_data.title.set("Cleared")
        form.data.foreignkey_data.set(none);
    }, [form])

    return (
        <div style={{padding: 20}}>
            <MaterialFormForeignKey
                form={form}
                name="foreignkey"
                field={form.schema.properties.foreignkey}
            />
            <MaterialFormForeignKey
                form={form}
                name="default"
                field={form.schema.properties.foreignkey_default}
            />
            <MaterialFormForeignKey
                form={form}
                name="foreignkey_data"
                field={form.schema.properties.foreignkey_data}
            />
            <MaterialFormForeignKey
                form={form}
                name="foreignkey_nourl"
                field={form.schema.properties.foreignkey_nourl}
            />
            <button className="btn" onClick={handleChange}>Change</button>
            <button className="btn" onClick={handleClear}>Clear</button>
        </div>
    );
}

export default TestForeignKey;
