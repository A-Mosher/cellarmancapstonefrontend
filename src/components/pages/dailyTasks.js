import React, { useEffect, useState } from 'react';
import ApiCalendar from 'react-google-calendar-api';
import data from '../dailyTaskStuff/data.json';
import Header from '../dailyTaskStuff/header';
import TaskList from '../dailyTaskStuff/taskList';
import TaskForm from '../dailyTaskStuff/taskForm';
import './dailyTasks.css';
import { FileCopySharp } from '@material-ui/icons';
import ReactDOM from 'react-dom';



function DailyTasks() {

    const [ taskList, setTaskList ] = useState(data);
    const [ isSignedIn, setIsSignedIn ] = useState(false);
    const [ summary, setSummary ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ startDateTime, setStartDateTime ] = useState('');
    const [ endDateTime, setEndDateTime ] = useState('');

    useEffect(()=> {
        setTimeout(()=> {
        
             ApiCalendar.listenSign((data, error)=> {
                 setIsSignedIn(true);
            console.log("===data", data, error)

         
        })
        }, 2000)
       
        // ApiCalendar.listenSign((data, error)=> {
        //     console.log("===data", data, error)

        //     // ApiCalendar.createEventFromNow(eventFromNow)
        //     // .then((result: object) => {
        //     //     console.log(result);
        //     // })
        //     // .catch((error: any) => {
        //     //     console.log(error);
        //     // });
        // })

      // 
      return () => ApiCalendar.handleSignoutClick()
    }, [])

    const handleToggle = (id) => {
        let mapped = taskList.map(task => {
            return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
        });
        setTaskList(mapped);
    }

    const handleFilter = () => {
        let filtered = taskList.filter(task => {
            return !task.complete;
        });
        setTaskList(filtered);
    }

    const addTask = (userInput) => {
        let copy = [...taskList];
        copy = [...copy, { id: taskList.length + 1, task: userInput, complete: false }];
        setTaskList(copy);
    }


   const createEvent = () => {
        const eventFromNow: object = {
            summary: 'Poc Dev From Now',
            time: 480,
        };

       

     

        const createNewEvent: object = {
            summary: summary,
            location: location,
            description: description,
            start: {
                dateTime: new Date(startDateTime),
              },
            end: {
                dateTime: new Date(endDateTime),
              },
        };

           ApiCalendar.createEvent(createNewEvent)
            .then((result: object) => {
                console.log(result);
            })
            .catch((error: any) => {
                console.log(error);
            });

        //create~EVent 
        // {startDate, endDate, summery, discription}
       
       
    }


    return (
        <div className='dailyTasks'>
            <Header />
            <TaskList taskList={taskList} handleToggle={handleToggle} handleFilter={handleFilter} />
            <TaskForm addTask={addTask} />
            {/* <iframe src="https://docs.google.com/spreadsheets/d/1SrxUBBpjlkMzn66Z8MJ4-Zi-DVlfh7QnTob_zMKLOWM/edit#gid=2105218025" style={width= 100%; height= 600px; border= 0} title="productionSchedule">

            </iframe> */}
            {!isSignedIn ? <button onClick={()=> ApiCalendar.handleAuthClick()}> Sign in to add a calendar event</button>: 
            <div>
                <form className='calendar event from'>
                    <label>
                        Summary:
                        <input name="summary" value={summary} onChange={(e) => setSummary(e.target.value)}/>
                    </label>
                    <label>
                        Location:
                        <input name="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
                    </label>
                    <label>
                        Description:
                        <input name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </label>
                    <label>
                        Start Date/Time:
                        <input name="start" value={startDateTime} onChange={(e) => setStartDateTime(e.target.value)} placeholder='2015-05-28T09:00:00-05:00'/>
                    </label>
                    <label>
                        End Date/Time:
                        <input name="end" value={endDateTime} onChange={(e) => setEndDateTime(e.target.value)} placeholder='2015-05-28T09:00:00-05:00'/>
                    </label>
                    <button onClick={createEvent}>Create Event</button>
                </form>
            </div>}
          
        </div>
    );
}

export default DailyTasks;