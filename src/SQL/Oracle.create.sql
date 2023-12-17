



CREATE TABLE "Оценка"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаПроведения" DATE NULL,

	"Статус" NVARCHAR2(10) NULL,

	"Комментарий" NVARCHAR2(255) NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОценкаИнфа"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Оценка" RAW(16) NOT NULL,

	"Сотрудники" RAW(16) NOT NULL,

	"ОтчётОбОценке" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудники"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Должность" NVARCHAR2(255) NULL,

	"Ранг" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Увольнение"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаУвольнения" DATE NULL,

	"Причина" NVARCHAR2(14) NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОтчётОбОценке"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаОтчёта" DATE NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Оценка"
	ADD CONSTRAINT "Оценка_FСотруд_569" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "Оценка_IСотру_3741" on "Оценка" ("Сотрудники");

ALTER TABLE "ОценкаИнфа"
	ADD CONSTRAINT "ОценкаИнфа_FО_6195" FOREIGN KEY ("Оценка") REFERENCES "Оценка" ("primaryKey");

CREATE INDEX "ОценкаИнфа_IО_4307" on "ОценкаИнфа" ("Оценка");

ALTER TABLE "ОценкаИнфа"
	ADD CONSTRAINT "ОценкаИнфа_FС_5371" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ОценкаИнфа_IС_8304" on "ОценкаИнфа" ("Сотрудники");

ALTER TABLE "ОценкаИнфа"
	ADD CONSTRAINT "ОценкаИнфа_FО_7310" FOREIGN KEY ("ОтчётОбОценке") REFERENCES "ОтчётОбОценке" ("primaryKey");

CREATE INDEX "ОценкаИнфа_IО_5277" on "ОценкаИнфа" ("ОтчётОбОценке");

ALTER TABLE "Увольнение"
	ADD CONSTRAINT "Увольнение_FС_7175" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "Увольнение_IС_1024" on "Увольнение" ("Сотрудники");

ALTER TABLE "ОтчётОбОценке"
	ADD CONSTRAINT "ОтчётОбОценк_4880" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ОтчётОбОценке_700" on "ОтчётОбОценке" ("Сотрудники");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


