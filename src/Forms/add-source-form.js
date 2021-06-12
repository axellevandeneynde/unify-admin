import { Formik, Field, Form, } from 'formik';
import { useState } from 'react';
import Spinner from '../components/spinner';
import ChecklistItem from '../components/checklistItem';

function AddSourceForm() {

    const [submitLoading, setSubmitLoading] = useState(false);
    const [submittedSource, setSubmittedSource] = useState({});
    const [apiResponse, setApiResponse] = useState({});

    const categories = ['politics', 'culture', 'sport', 'international', 'economy', 'technology', 'science', 'health', 'travel', 'columns', 'Business', 'life & style', 'general', 'long reads']
    const regions = ['belgium', 'flanders', 'brussels', 'wallonia', 'Antwerpen', 'Kempen', 'Mechelen-Waas', 'Limburg', 'Europa', 'Nederland']

    const categoriesChecklistItems = categories.map((item, i) =>
        <ChecklistItem label={item} list="categories" key={`c${i}`} ></ChecklistItem>
    )
    const regionsChecklistItems = regions.map((item, i) =>
        <ChecklistItem label={item} list="regions" key={`r${i}`} ></ChecklistItem>
    )

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
                    regions: [],
                    biased: 'false'
                }}
                onSubmit={async (values) => {
                    setSubmitLoading(true);
                    //local
                    fetch('http://localhost:3001/new-rss-feed', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(values),
                    }).then(result => result.json())
                        .then(data => {
                            setApiResponse(data);
                            setSubmitLoading(false);
                            setSubmittedSource(values);
                        });
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
                        {categoriesChecklistItems}
                    </div>

                    <div className="field">
                        <label className="label">Publication regions</label>
                        {regionsChecklistItems}
                    </div>

                    <div className="field">
                        <div className="control">
                            <label className="label">Biased</label>
                            <Field type="text" label="biased" name="biased" id="biased" ></Field>
                        </div>
                    </div>

                    <div className="control">
                        <button type="submit" className="button is-warning">Submit <Spinner loading={submitLoading}></Spinner></button>
                    </div>
                </Form>
            </Formik>
            <p>{JSON.stringify(apiResponse)}</p>
            <p>{JSON.stringify(submittedSource)}</p>
        </section>
    );
}

export default AddSourceForm;