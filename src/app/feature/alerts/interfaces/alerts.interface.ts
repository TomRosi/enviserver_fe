export interface AlertsInterface {
  id: number;
  createdOn: Date;
  highTemperature: number;
  lowTemperature: number;
  modifiedOn: Date;
  sensorUUID: string;
  temperature: number;
  temperatureStyle: object;
}
