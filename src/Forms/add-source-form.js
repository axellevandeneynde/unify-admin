import { Formik, Field, Form, } from 'formik';

function AddSourceForm() {
    return (
        <section className="container is-max-desktop section is-small">
            <h1 className="title">Add new publication</h1>
            <Formik
                initialValues={{
                    url: '',
                    name: '',
                    logo: '',
                    description: '',
                    website: '',
                    language: '',
                    categories: [],
                    regions: []
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <div className="field">
                        <label className="label">RSS Url</label>
                        <div className="control">
                            <Field
                                className="input"
                                id="url"
                                name="url"></Field>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Publication name</label>
                        <div className="control">
                            <Field className="input"
                                id="name"
                                name="name"></Field>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Link to publication logo</label>
                        <div className="control">
                            <Field className="input"
                                id="logo"
                                name="logo"></Field>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Publication description</label>
                        <div className="control">
                            <Field component="textarea" className="textarea"
                                id="description"
                                name="description"></Field>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Publication website</label>
                        <div className="control">
                            <Field className="input"
                                id="website"
                                name="website"></Field>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Language</label>
                        <div className="control">
                            <div className="select">
                                <Field as="select" className="select"
                                    id="language"
                                    name="language">
                                    <option value="dutch">Dutch</option>
                                    <option value="english">English</option>
                                </Field>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Publication categories</label>
                        <div className="control">
                            <label className="checkbox">
                                <Field type="checkbox" name="categories" value="politiek"></Field>
                           Politiek
                    </label>
                        </div>
                        <div className="control">
                            <label className="checkbox">
                                <Field type="checkbox" name="categories" value="sport"></Field>
                           Sport
                    </label>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Publication regions</label>
                        <div className="control">
                            <label className="checkbox">
                                <Field type="checkbox" name="regions"></Field>
                           Politiek
                    </label>
                        </div>
                        <div className="control">
                            <label className="checkbox">
                                <Field type="checkbox" name="regions"></Field>
                           Sport
                    </label>
                        </div>
                    </div>

                    <div className="control">
                        <button type="submit" className="button is-warning">Submit</button>
                    </div>
                </Form>
            </Formik>
        </section>
    );
}

export default AddSourceForm;