-- StreamDocs Rest API 5.13.1.1 (StreamDocs Package 5.11.7.2) 버전 업그레이드 필수 진행
-- 최소 지원 버전 : StreamDocs Rest API 5.12.0.0 RELEASE
-- 컬럼 변경 사유 : MSSQL 및 신규로 지원하는 CUBRID DBMS의 예약어와 충돌이 발생하여 불가피하게 변경

-- 비고 : MSSQL 및 Cubrid의 경우 테이블 생성이 정상적으로 되지 않는 경우이기 때문에 수정 쿼리가 없습니다.
-- 만약 일부 테이블만 생성되고 기동이 실패한 경우라면 모든 테이블을 제거 후 다시 기동하시기 바랍니다.

-- MySQL, MariaDB
ALTER TABLE pdf_auth CHANGE annots n_annots TINYINT(1);
ALTER TABLE pdf_auth CHANGE download n_download TINYINT(1);
ALTER TABLE pdf_auth CHANGE form n_form TINYINT(1);
ALTER TABLE pdf_auth CHANGE print n_print TINYINT(1);
ALTER TABLE pdf_auth CHANGE save n_save TINYINT(1);
ALTER TABLE sd_system_usage_statistics CHANGE timestamp n_timestamp TIMESTAMP;
ALTER TABLE sd_time_document_statistics CHANGE timestamp n_timestamp TIMESTAMP;

-- Oracle
ALTER TABLE pdf_auth RENAME COLUMN "ANNOTS" TO n_annots;
ALTER TABLE pdf_auth RENAME COLUMN "DOWNLOAD" TO n_download;
ALTER TABLE pdf_auth RENAME COLUMN "FORM" TO n_form;
ALTER TABLE pdf_auth RENAME COLUMN "PRINT" TO n_print;
ALTER TABLE pdf_auth RENAME COLUMN "SAVE" TO n_save;
ALTER TABLE sd_system_usage_statistics RENAME COLUMN "TIMESTAMP" TO n_timestamp;
ALTER TABLE sd_time_document_statistics RENAME COLUMN "TIMESTAMP" TO n_timestamp;

-- PostgreSql
ALTER TABLE pdf_auth RENAME COLUMN "annots" TO n_annots;
ALTER TABLE pdf_auth RENAME COLUMN "download" TO n_download;
ALTER TABLE pdf_auth RENAME COLUMN "form" TO n_form;
ALTER TABLE pdf_auth RENAME COLUMN "print" TO n_print;
ALTER TABLE pdf_auth RENAME COLUMN "save" TO n_save;
ALTER TABLE sd_system_usage_statistics RENAME COLUMN "timestamp" TO n_timestamp
ALTER TABLE sd_time_document_statistics RENAME COLUMN "timestamp" TO n_timestamp

-- DB2
ALTER TABLE PDF_AUTH RENAME COLUMN ANNOTS TO N_ANNOTS;
ALTER TABLE PDF_AUTH RENAME COLUMN DOWNLOAD TO N_DOWNLOAD;
ALTER TABLE PDF_AUTH RENAME COLUMN FORM TO N_FORM;
ALTER TABLE PDF_AUTH RENAME COLUMN PRINT TO N_PRINT;
ALTER TABLE PDF_AUTH RENAME COLUMN SAVE TO N_SAVE;
ALTER TABLE SD_SYSTEM_USAGE_STATISTICS RENAME COLUMN TIMESTAMP TO N_TIMESTAMP;
ALTER TABLE SD_TIME_DOCUMENT_STATISTICS RENAME COLUMN TIMESTAMP TO N_TIMESTAMP;

-- Tibero6
ALTER TABLE PDF_AUTH RENAME COLUMN ANNOTS TO N_ANNOTS;
ALTER TABLE PDF_AUTH RENAME COLUMN DOWNLOAD TO N_DOWNLOAD;
ALTER TABLE PDF_AUTH RENAME COLUMN FORM TO N_FORM;
ALTER TABLE PDF_AUTH RENAME COLUMN PRINT TO N_PRINT;
ALTER TABLE PDF_AUTH RENAME COLUMN SAVE TO N_SAVE;
ALTER TABLE SD_SYSTEM_USAGE_STATISTICS RENAME COLUMN TIMESTAMP TO N_TIMESTAMP;
ALTER TABLE SD_TIME_DOCUMENT_STATISTICS RENAME COLUMN TIMESTAMP TO N_TIMESTAMP;

-- H2
ALTER TABLE PDF_AUTH ALTER COLUMN ANNOTS RENAME TO N_ANNOTS;
ALTER TABLE PDF_AUTH ALTER COLUMN DOWNLOAD RENAME TO N_DOWNLOAD;
ALTER TABLE PDF_AUTH ALTER COLUMN FORM RENAME TO N_FORM;
ALTER TABLE PDF_AUTH ALTER COLUMN PRINT RENAME TO N_PRINT;
ALTER TABLE PDF_AUTH ALTER COLUMN SAVE RENAME TO N_SAVE;
ALTER TABLE SD_SYSTEM_USAGE_STATISTICS ALTER COLUMN TIMESTAMP RENAME TO N_TIMESTAMP;
ALTER TABLE SD_TIME_DOCUMENT_STATISTICS ALTER COLUMN TIMESTAMP RENAME TO N_TIMESTAMP;



---------------------------------------------------------------------------------------------------------------

-- 아래 SQL은 StreamDocs Rest API 5.11.3.0 RELEASE 버전부터 적용되는 컬럼 명 변경에 따라
-- 기 배포된 고객사 StreamDocs 버전 업데이트 시 컬럼명을 변경할 수 있는 쿼리문입니다.
-- 업데이트를 진행하기 전 반드시 각 DB 벤더별로 해당 쿼리를 수행한 후 패치를 적용해야 합니다.

-- MySQL, MariaDB
ALTER TABLE document_usage_history CHANGE attribute n_attribute VARCHAR(255);
ALTER TABLE document_usage_history CHANGE value n_value VARCHAR(255);
ALTER TABLE pdf_resource CHANGE temporary n_temporary BIT(1);
ALTER TABLE pdf_resource_combination_link CHANGE sequence n_sequence INT(11);
ALTER TABLE sd_config CHANGE value n_value VARCHAR(1024);

-- SQL Server
--EXEC sp_rename '[테이블명] .[기존 컬럼명]', '[변경할컬럼명]', 'COLUMN';
EXEC sp_rename 'document_usage_history.attribute', 'n_attribute', 'COLUMN';
EXEC sp_rename 'document_usage_history.value', 'n_value', 'COLUMN';
EXEC sp_rename 'pdf_resource.temporary', 'n_temporary', 'COLUMN';
EXEC sp_rename 'pdf_resource_combination_link.sequence', 'n_sequence', 'COLUMN';
EXEC sp_rename 'sd_config.value', 'n_value', 'COLUMN';

-- ORACLE
ALTER TABLE document_usage_history RENAME COLUMN "ATTRIBUTE" TO n_attribute;
ALTER TABLE document_usage_history RENAME COLUMN value TO n_value;
ALTER TABLE pdf_resource RENAME COLUMN "TEMPORARY" TO n_temporary;
ALTER TABLE pdf_resource_combination_link RENAME COLUMN "SEQUENCE" TO n_sequence;
ALTER TABLE sd_config RENAME COLUMN value TO n_value;

--PostgreSql
ALTER TABLE document_usage_history RENAME COLUMN "attribute" TO n_attribute;
ALTER TABLE document_usage_history RENAME COLUMN "value" TO n_value;
ALTER TABLE pdf_resource RENAME COLUMN "temporary" TO n_temporary;
ALTER TABLE pdf_resource_combination_link RENAME COLUMN "sequence" TO n_sequence;
ALTER TABLE sd_config RENAME COLUMN "value" TO n_value;





