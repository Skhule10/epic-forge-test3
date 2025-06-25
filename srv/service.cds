using { 
  sap.common, 
  sap.ui,
} from '@sap/cds';

service DigitalAssistant {
  entity Tasks {
    key ID : UUID;
    Title  : String;
    Description : String;
    DueDate : Date;
    Status : String;
  }
  @readonly
  entity Users as select from sap.common.Users;
}