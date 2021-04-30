import { Field } from 'formik';

export default function ChecklistItem(props) {
    return (
        <div className="control">
            <label className="checkbox">
                <Field type="checkbox" name={props.list} value={props.label}></Field>
                {props.label}
            </label>
        </div>
    )
}