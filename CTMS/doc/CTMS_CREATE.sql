--create temporary
CONNECT / AS SYSDBA;
DROP TABLESPACE CTMS_TEMP INCLUDING CONTENTS AND DATAFILES;
CREATE TEMPORARY TABLESPACE CTMS_TEMP
TEMPFILE 'G:\zhangk\oracledata\ctms_temp.dbf'
SIZE 50m 
AUTOEXTEND on 
NEXT 50m MAXSIZE 80m 
EXTENT MANAGEMENT local; 

--create tablespace
DROP TABLESPACE CTMS_DATA INCLUDING CONTENTS AND DATAFILES;
CREATE TABLESPACE CTMS_DATA 
LOGGING 
DATAFILE 'G:\zhangk\oracledata\ctms_data.dbf'
SIZE 50m 
AUTOEXTEND on 
NEXT 50m MAXSIZE 80m 
EXTENT MANAGEMENT local; 


DROP USER CTMS;
CREATE USER CTMS IDENTIFIED BY CTMS;
GRANT CONNECT,RESOURCE,SYSDBA TO CTMS IDENTIFIED BY CTMS;
ALTER USER CTMS DEFAULT TABLESPACE CTMS_DATA;
ALTER USER CTMS TEMPORARY TABLESPACE CTMS_TEMP;
CONNECT CTMS/CTMS;

--create teacher table
create table teacher(
Teacher_id Varchar(50) primary key,
Teacher_name Varchar(50),
Teacher_sex Varchar(10),
Teacher_contaxt Varchar(150),
status Varchar(10),
Permission Varchar(10),
Teacher_zige Varchar(20),
Teacher_email Varchar(150),
Teacher_use Varchar(10),
Teacher_pic Varchar(30),
password varchar(30)
) 