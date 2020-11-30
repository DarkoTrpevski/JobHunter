import React from 'react';
import { connect } from 'react-redux';
import { IAlert } from '../../redux/redux-typescript/ReduxTypes';

interface AlertProps {
  alerts: IAlert[]
}

const Alert: React.FC<AlertProps> = ({ alerts }) => {

  return (
    <>
      {alerts !== null &&
      alerts.length > 0 &&
      alerts.map(alert => (
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
          {alert.msg}
        </div>
      ))}
    </>
  )

}

const mapStateToProps = (state: any) => ({
  alerts: state.alertReducer
});

export default connect(mapStateToProps)(Alert);