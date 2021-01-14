import React from 'react';
import { connect } from 'react-redux';
import { AlertType } from '../../redux/types/types';
import { removeAlert } from '../../redux/alert/alertActions';
import { Alert as ChakraAlert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from "@chakra-ui/core";

interface AlertProps {
  alerts: AlertType[],
  removeAlert: (id: string) => void,
}

const Alert: React.FC<AlertProps> = ({ alerts, removeAlert }) => {

  // return (
  //   <>
  //     {alerts !== null &&
  //     alerts.length > 0 &&
  //     alerts.map(alert => (
  //       <div key={alert.id} className={`alert alert-${alert.alertType}`}>
  //         {alert.msg}
  //       </div>
  //     ))}
  //   </>
  // )

  return (
    <>
      {alerts !== null &&
      alerts.length > 0 &&
      alerts.map(alert => (
        <ChakraAlert key = {alert.id} status={alert.alertType}>
          <AlertIcon />
          <AlertTitle mr={2}>{alert.msg}</AlertTitle>
          <CloseButton onClick={() => removeAlert(alert.id)} position="absolute" right="8px" top="8px" />
        </ChakraAlert>
      ))}
    </>
  )

}

const mapStateToProps = (state: any) => ({
  alerts: state.alertReducer
});

export default connect(mapStateToProps, { removeAlert })(Alert);