import React from 'react';
import Moment from 'react-moment';
import {Button} from "./Button.js";

Moment.globalLocale = 'es';


export const Table = ({list, onDismiss}) =>
    <div className="table">
        {list.map(item => {
            return <div key={item.objectID} className="table-row">

               <span style={{ width: '40%' }}>
              <a href={item.url}>{item.title}</a>
            </span>
                <span style={{ width: '30%' }}>
              {item.author}
            </span>
                <span style={{ width: '30%' }}>
                              <Date dateToFormat={item.created_at}/>
            </span>
                <span style={{ width: '10%' }}>
              <Button
                  onClick={() => onDismiss(item.objectID)}
                  className="button-inline"
              >
                Dismiss
              </Button>
                   </span>

            </div>;
        })}
    </div>;

const Date = ({dateToFormat}) => <Moment fromNow>{dateToFormat}</Moment>;

