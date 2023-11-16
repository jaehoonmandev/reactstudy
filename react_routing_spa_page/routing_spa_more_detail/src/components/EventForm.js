import {useNavigate, Form, useNavigation, useActionData} from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({method, event}) {
    //loader에 의한 리턴이 아닌 action에 의한 리턴.
    // action이 정의된 페이지 컴포넌트에 의해 렌더링 되기에 사용가능.
    const data = useActionData();

    const navigate = useNavigate();
    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting'

    function cancelHandler() {
        navigate('..');
    }

    return (
        <Form method={'POST'} className={classes.form}>
            {data && data.errors &&
                <ul>
                    {
                        Object.values(data.errors)
                            .map((err) => (
                                <li key={err}>
                                    {err}
                                </li>))
                    }
                </ul>
            } {/*폼을 제출하지 않았다면 아직 설정 되지 않았을 데이터.*/}
                <p>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" name="title" required
                           defaultValue={event ? event.title : ''}/>
                </p>
                <p>
                    <label htmlFor="image">Image</label>
                    <input id="image" type="url" name="image" required
                           defaultValue={event ? event.image : ''}/>
                </p>
                <p>
                    <label htmlFor="date">Date</label>
                    <input id="date" type="date" name="date" required
                           defaultValue={event ? event.date : ''}/>
                </p>
                <p>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" rows="5" required
                              defaultValue={event ? event.description : ''}/>
                </p>
                <div className={classes.actions}>
                    <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
                        Cancel
                    </button>
                    <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
                </div>
            </Form>
                );
            }

export default EventForm;
