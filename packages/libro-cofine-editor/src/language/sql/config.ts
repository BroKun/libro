export const id = 'sql-odps';
// 使用字面量作为关键词
export const keywords = [
  'ADD',
  'ALL',
  'ALTER',
  'ALWAYS',
  'ANALYZE',
  'AND',
  'ARRAY',
  'AS',
  'ASC',
  'ATTRIBUTE',
  'BEFORE',
  'BETWEEN',
  'BOTH',
  'BUCKETS',
  'BY',
  'CALL',
  'CASCADE',
  'CASE',
  // 'CAST',
  'CHANGE',
  'CHARACTER',
  'CHECK',
  'COLLATE',
  'COLUMN',
  'CONDITION',
  'CONSTRAINT',
  'CONTINUE',
  'CONVERT',
  'CREATE',
  'CROSS',
  'CURRENT',
  'CURRENT_ROLE',
  'CURRENT_USER',
  'CURSOR',
  'DATABASE',
  'DATABASES',
  'DECLARE',
  'DEFAULT',
  'DELAYED',
  'DELETE',
  'DESC',
  'DESCRIBE',
  'DETERMINISTIC',
  'DIAGNOSTICS',
  'DISTINCT',
  'DISTINCTROW',
  'DROP',
  'EACH',
  'ELSE',
  'ELSEIF',
  'EMPTY',
  'ENCLOSED',
  'ENFORCED',
  'ESCAPED',
  'EXCEPT',
  'EXISTS',
  'EXIT',
  'EXPLAIN',
  'FALSE',
  'FETCH',
  'FOR',
  'FORCE',
  'FOREIGN',
  'FROM',
  'FULLTEXT',
  'GENERATED',
  'GET',
  'GRANT',
  'GROUP',
  'HAVING',
  'HIGH_PRIORITY',
  'HISTOGRAM',
  'IF',
  'IGNORE',
  'IGNORED',
  'IN',
  'INDEX',
  'INFILE',
  'INNER',
  'INOUT',
  'INSERT',
  'INTERVAL',
  'INTO',
  'IS',
  'ITERATE',
  'JOIN',
  'KEY',
  'KEYS',
  'KILL',
  'LATERAL',
  'LEADING',
  'LEAVE',
  'LEFT',
  'LIKE',
  'LIMIT',
  'LINEAR',
  'LINES',
  'LOAD',
  'LOCK',
  'LOCKED',
  'LOOP',
  'LOW_PRIORITY',
  'MASTER_BIND',
  'MASTER_SSL_VERIFY_SERVER_CERT',
  'MATCH',
  'MAXVALUE',
  'MINVALUE',
  'MODIFIES',
  'NATURAL',
  'NOT',
  'NO_WRITE_TO_BINLOG',
  'NULL',
  'NUMBER',
  'ON',
  'OPTIMIZE',
  'OPTION',
  'OPTIONAL',
  'OPTIONALLY',
  'OR',
  'ORDER',
  'OUT',
  'OUTER',
  'OUTFILE',
  'OVER',
  'PARTITION',
  'PRIMARY',
  'PROCEDURE',
  'PURGE',
  'RANGE',
  'READ',
  'READS',
  'REFERENCES',
  'REGEXP',
  'RELEASE',
  'RENAME',
  'REPEAT',
  'REPLACE',
  'REQUIRE',
  'RESIGNAL',
  'RESTRICT',
  'RETAIN',
  'RETURN',
  'REVOKE',
  'RIGHT',
  'RLIKE',
  'SCHEMA',
  'SCHEMAS',
  'SELECT',
  'SET',
  'SEPARATOR',
  'SHOW',
  'SIGNAL',
  'SKIP',
  'SKIP_QUERY_REWRITE',
  'SPATIAL',
  'SQL',
  'SQLEXCEPTION',
  'SQLSTATE',
  'SQLWARNING',
  'SQL_BIG_RESULT',
  'SQL_CALC_FOUND_ROWS',
  'SQL_SMALL_RESULT',
  'SSL',
  'STACKED',
  'STARTING',
  'STATEMENT',
  'STRAIGHT_JOIN',
  'TABLE',
  'TERMINATED',
  'THEN',
  'TO',
  'TRAILING',
  'TRIGGER',
  'TRUE',
  'UNDO',
  'UNION',
  'UNIQUE',
  'UNLOCK',
  'UNSIGNED',
  'UPDATE',
  'USAGE',
  'USE',
  'USING',
  'VALUES',
  'WHEN',
  'WHERE',
  'WHILE',
  'WITH',
  'WRITE',
  'XOR',
  'ZEROFILL',
  'TINYINT',
  'SMALLINT',
  'MEDIUMINT',
  'MIDDLEINT',
  'INT',
  'INT1',
  'INT2',
  'INT3',
  'INT4',
  'INT8',
  'INTEGER',
  'BIGINT',
  'REAL',
  'DOUBLE',
  'PRECISION',
  'FLOAT',
  'FLOAT4',
  'FLOAT8',
  'DECIMAL',
  'DEC',
  'NUMERIC',
  'DATE',
  'TIME',
  'TIMESTAMP',
  'DATETIME',
  'YEAR',
  'CHAR',
  'VARCHAR',
  'NVARCHAR',
  'NATIONAL',
  'BINARY',
  'VARBINARY',
  'TINYBLOB',
  'BLOB',
  'MEDIUMBLOB',
  'LONG',
  'LONGBLOB',
  'TINYTEXT',
  'TEXT',
  'MEDIUMTEXT',
  'LONGTEXT',
  'ENUM',
  'VARYING',
  'SERIAL',
  'YEAR_MONTH',
  'DAY_HOUR',
  'DAY_MINUTE',
  'DAY_SECOND',
  'HOUR_MINUTE',
  'HOUR_SECOND',
  'MINUTE_SECOND',
  'SECOND_MICROSECOND',
  'MINUTE_MICROSECOND',
  'HOUR_MICROSECOND',
  'DAY_MICROSECOND',
  'NESTED',
  'ORDINALITY',
  'PATH',

  // 'AVG',
  // 'BIT_AND',
  // 'BIT_OR',
  // 'BIT_XOR',
  'GROUP_CONCAT',
  'LEAD',
  // 'MAX',
  // 'MIN',
  'NTILE',
  'NTH_VALUE',
  'PERCENT_RANK',
  'RANK',
  'ROW_NUMBER',
  // 'STD',
  // 'STDDEV',
  // 'STDDEV_POP',
  // 'STDDEV_SAMP',
  // 'SUM',
  // 'VAR_POP',
  // 'VAR_SAMP',
  // 'VARIANCE',
  // 'CURRENT_DATE',
  // 'CURRENT_TIME',
  // 'CURRENT_TIMESTAMP',
  // 'LOCALTIME',
  // 'CURDATE',
  // 'CURTIME',
  // 'DATE_ADD',
  // 'DATE_SUB',
  'EXTRACT',
  // 'LOCALTIMESTAMP',
  // 'NOW',
  // 'POSITION',
  // 'SUBSTR',
  // 'SUBSTRING',
  'SYSDATE',
  'TRIM',
  // 'UTC_DATE',
  // 'UTC_TIME',
  // 'UTC_TIMESTAMP',
  'ACCOUNT',
  'ACTION',
  'AFTER',
  'AGGREGATE',
  'ALGORITHM',
  'ANY',
  'AT',
  'AUTHORS',
  'AUTOCOMMIT',
  'AUTOEXTEND_SIZE',
  'AUTO_INCREMENT',
  'AVG_ROW_LENGTH',
  'BEGIN',
  'BINLOG',
  'BIT',
  'BLOCK',
  'BOOL',
  'BOOLEAN',
  'BTREE',
  'CACHE',
  'CASCADED',
  'CHAIN',
  'CHANGED',
  'CHANNEL',
  'CHECKSUM',
  'PAGE_CHECKSUM',
  'CIPHER',
  'CLASS_ORIGIN',
  'CLIENT',
  'CLOSE',
  'CLUSTERING',
  'COALESCE',
  'CODE',
  'COLUMNS',
  'COLUMN_FORMAT',
  'COLUMN_NAME',
  'COMMENT',
  'COMMIT',
  'COMPACT',
  'COMPLETION',
  'COMPRESSED',
  'COMPRESSION',
  'CONCURRENT',
  'CONNECT',
  'CONNECTION',
  'CONSISTENT',
  'CONSTRAINT_CATALOG',
  'CONSTRAINT_SCHEMA',
  'CONSTRAINT_NAME',
  'CONTAINS',
  'CONTEXT',
  'CONTRIBUTORS',
  'COPY',
  'CPU',
  'CYCLE',
  'CURSOR_NAME',
  'DATA',
  'DATAFILE',
  'DEALLOCATE',
  'DEFAULT_AUTH',
  'DEFINER',
  'DELAY_KEY_WRITE',
  'DES_KEY_FILE',
  'DIRECTORY',
  'DISABLE',
  'DISCARD',
  'DISK',
  'DO',
  'DUMPFILE',
  'DUPLICATE',
  'DYNAMIC',
  'ENABLE',
  'ENCRYPTED',
  'ENCRYPTION',
  'ENCRYPTION_KEY_ID',
  'END',
  'ENDS',
  'ENGINE',
  'ENGINES',
  'ERROR',
  'ERRORS',
  'ESCAPE',
  'EVEN',
  'EVENT',
  'EVENTS',
  'EVERY',
  'EXCHANGE',
  'EXCLUSIVE',
  'EXPIRE',
  'EXPORT',
  'EXTENDED',
  'EXTENT_SIZE',
  'FAILED_LOGIN_ATTEMPTS',
  'FAST',
  'FAULTS',
  'FIELDS',
  'FILE_BLOCK_SIZE',
  'FILTER',
  'FIRST',
  'FIXED',
  'FLUSH',
  'FOLLOWING',
  'FOLLOWS',
  'FOUND',
  'FULL',
  'FUNCTION',
  'GENERAL',
  'GLOBAL',
  'GRANTS',
  'GROUP_REPLICATION',
  'HANDLER',
  'HASH',
  'HELP',
  'HISTORY',
  'HOST',
  'HOSTS',
  'IDENTIFIED',
  'IGNORE_SERVER_IDS',
  'IMPORT',
  'INCREMENT',
  'INDEXES',
  'INITIAL_SIZE',
  'INPLACE',
  'INSERT_METHOD',
  'INSTALL',
  'INSTANCE',
  'INSTANT',
  'INVISIBLE',
  'INVOKER',
  'IO',
  'IO_THREAD',
  'IPC',
  'ISOLATION',
  'ISSUER',
  'JSON',
  'KEY_BLOCK_SIZE',
  'LANGUAGE',
  'LAST',
  'LEAVES',
  'LESS',
  'LEVEL',
  'LIST',
  'LOCAL',
  'LOGFILE',
  'LOGS',
  'MASTER',
  'MASTER_AUTO_POSITION',
  'MASTER_CONNECT_RETRY',
  'MASTER_DELAY',
  'MASTER_HEARTBEAT_PERIOD',
  'MASTER_HOST',
  'MASTER_LOG_FILE',
  'MASTER_LOG_POS',
  'MASTER_PASSWORD',
  'MASTER_PORT',
  'MASTER_RETRY_COUNT',
  'MASTER_SSL',
  'MASTER_SSL_CA',
  'MASTER_SSL_CAPATH',
  'MASTER_SSL_CERT',
  'MASTER_SSL_CIPHER',
  'MASTER_SSL_CRL',
  'MASTER_SSL_CRLPATH',
  'MASTER_SSL_KEY',
  'MASTER_TLS_VERSION',
  'MASTER_USER',
  'MAX_CONNECTIONS_PER_HOUR',
  'MAX_QUERIES_PER_HOUR',
  'MAX_ROWS',
  'MAX_SIZE',
  'MAX_UPDATES_PER_HOUR',
  'MAX_USER_CONNECTIONS',
  'MEDIUM',
  'MEMBER',
  'MERGE',
  'MESSAGE_TEXT',
  'MID',
  'MIGRATE',
  'MIN_ROWS',
  'MODE',
  'MODIFY',
  'MUTEX',
  'MYSQL',
  'MYSQL_ERRNO',
  'NAME',
  'NAMES',
  'NCHAR',
  'NEVER',
  'NEXT',
  'NO',
  'NOCACHE',
  'NOCOPY',
  'NOCYCLE',
  'NOMAXVALUE',
  'NOMINVALUE',
  'NOWAIT',
  'NODEGROUP',
  'NONE',
  'ODBC',
  'OFFLINE',
  'OFFSET',
  'OF',
  'OJ',
  'OLD_PASSWORD',
  'ONE',
  'ONLINE',
  'ONLY',
  'OPEN',
  'OPTIMIZER_COSTS',
  'OPTIONS',
  'OWNER',
  'PACK_KEYS',
  'PAGE',
  'PAGE_COMPRESSED',
  'PAGE_COMPRESSION_LEVEL',
  'PARSER',
  'PARTIAL',
  'PARTITIONING',
  'PARTITIONS',
  'PASSWORD',
  'PASSWORD_LOCK_TIME',
  'PHASE',
  'PLUGIN',
  'PLUGIN_DIR',
  'PLUGINS',
  'PORT',
  'PRECEDES',
  'PRECEDING',
  'PREPARE',
  'PRESERVE',
  'PREV',
  'PROCESSLIST',
  'PROFILE',
  'PROFILES',
  'PROXY',
  'QUERY',
  'QUICK',
  'REBUILD',
  'RECOVER',
  'RECURSIVE',
  'REDO_BUFFER_SIZE',
  'REDUNDANT',
  'RELAY',
  'RELAY_LOG_FILE',
  'RELAY_LOG_POS',
  'RELAYLOG',
  'REMOVE',
  'REORGANIZE',
  'REPAIR',
  'REPLICATE_DO_DB',
  'REPLICATE_DO_TABLE',
  'REPLICATE_IGNORE_DB',
  'REPLICATE_IGNORE_TABLE',
  'REPLICATE_REWRITE_DB',
  'REPLICATE_WILD_DO_TABLE',
  'REPLICATE_WILD_IGNORE_TABLE',
  'REPLICATION',
  'RESET',
  'RESTART',
  'RESUME',
  'RETURNED_SQLSTATE',
  'RETURNING',
  'RETURNS',
  'REUSE',
  'ROLE',
  'ROLLBACK',
  'ROLLUP',
  'ROTATE',
  'ROW',
  'ROWS',
  'ROW_FORMAT',
  'RTREE',
  'SAVEPOINT',
  'SCHEDULE',
  'SECURITY',
  'SEQUENCE',
  'SERVER',
  'SESSION',
  'SHARE',
  'SHARED',
  'SIGNED',
  'SIMPLE',
  'SLAVE',
  'SLOW',
  'SNAPSHOT',
  'SOCKET',
  'SOME',
  'SONAME',
  'SOUNDS',
  'SOURCE',
  'SQL_AFTER_GTIDS',
  'SQL_AFTER_MTS_GAPS',
  'SQL_BEFORE_GTIDS',
  'SQL_BUFFER_RESULT',
  'SQL_CACHE',
  'SQL_NO_CACHE',
  'SQL_THREAD',
  'START',
  'STARTS',
  'STATS_AUTO_RECALC',
  'STATS_PERSISTENT',
  'STATS_SAMPLE_PAGES',
  'STATUS',
  'STOP',
  'STORAGE',
  'STORED',
  'STRING',
  'SUBCLASS_ORIGIN',
  'SUBJECT',
  'SUBPARTITION',
  'SUBPARTITIONS',
  'SUSPEND',
  'SWAPS',
  'SWITCHES',
  'TABLE_NAME',
  'TABLESPACE',
  'TABLE_TYPE',
  'TEMPORARY',
  'TEMPTABLE',
  'THAN',
  'TRADITIONAL',
  'TRANSACTION',
  'TRANSACTIONAL',
  'TRIGGERS',
  'TRUNCATE',
  'UNBOUNDED',
  'UNDEFINED',
  'UNDOFILE',
  'UNDO_BUFFER_SIZE',
  'UNINSTALL',
  'UNKNOWN',
  'UNTIL',
  'UPGRADE',
  'USER',
  'USE_FRM',
  'USER_RESOURCES',
  'VALIDATION',
  'VALUE',
  'VARIABLES',
  'VIEW',
  'VIRTUAL',
  'VISIBLE',
  'WAIT',
  'WARNINGS',
  'WINDOW',
  'WITHOUT',
  'WORK',
  'WRAPPER',
  'X509',
  'XA',
  'XML',
  'YES',

  'EUR',
  'USA',
  'JIS',
  'ISO',
  'INTERNAL',
  'QUARTER',
  'MONTH',
  'DAY',
  'HOUR',
  'MINUTE',
  'WEEK',
  'SECOND',
  'MICROSECOND',
  'ADMIN',
  'APPLICATION_PASSWORD_ADMIN',
  'AUDIT_ABORT_EXEMPT',
  'AUDIT_ADMIN',
  'AUTHENTICATION_POLICY_ADMIN',
  'BACKUP_ADMIN',
  'BINLOG_ADMIN',
  'BINLOG_ENCRYPTION_ADMIN',
  'CLONE_ADMIN',
  'CONNECTION_ADMIN',
  'ENCRYPTION_KEY_ADMIN',
  'EXECUTE',
  'FILE',
  'FIREWALL_ADMIN',
  'FIREWALL_EXEMPT',
  'FIREWALL_USER',
  'FLUSH_OPTIMIZER_COSTS',
  'FLUSH_STATUS',
  'FLUSH_TABLES',
  'FLUSH_USER_RESOURCES',
  'GROUP_REPLICATION_ADMIN',
  'INNODB_REDO_LOG_ARCHIVE',
  'INNODB_REDO_LOG_ENABLE',
  'INVOKE',
  'LAMBDA',
  'NDB_STORED_USER',
  'PASSWORDLESS_USER_ADMIN',
  'PERSIST_RO_VARIABLES_ADMIN',
  'PRIVILEGES',
  'PROCESS',
  'RELOAD',
  'REPLICATION_APPLIER',
  'REPLICATION_SLAVE_ADMIN',
  'RESOURCE_GROUP_ADMIN',
  'RESOURCE_GROUP_USER',
  'ROLE_ADMIN',
  'ROUTINE',
  'S3',
  'SERVICE_CONNECTION_ADMIN',
  'SESSION_VARIABLES_ADMIN',
  'SET_USER_ID',
  'SHOW_ROUTINE',
  'SHUTDOWN',
  'SUPER',
  'SYSTEM_VARIABLES_ADMIN',
  'TABLES',
  'TABLE_ENCRYPTION_ADMIN',
  'VERSION_TOKEN_ADMIN',
  'XA_RECOVER_ADMIN',
  'ARMSCII8',
  // 'ASCII',
  'BIG5',
  'CP1250',
  'CP1251',
  'CP1256',
  'CP1257',
  'CP850',
  'CP852',
  'CP866',
  'CP932',
  'DEC8',
  'EUCJPMS',
  'EUCKR',
  'GB18030',
  'GB2312',
  'GBK',
  'GEOSTD8',
  'GREEK',
  'HEBREW',
  'HP8',
  'KEYBCS2',
  'KOI8R',
  'KOI8U',
  'LATIN1',
  'LATIN2',
  'LATIN5',
  'LATIN7',
  'MACCE',
  'MACROMAN',
  'SJIS',
  'SWE7',
  'TIS620',
  'UCS2',
  'UJIS',
  'UTF16',
  'UTF16LE',
  'UTF32',
  'UTF8',
  'UTF8MB3',
  'UTF8MB4',
  'ARCHIVE',
  'BLACKHOLE',
  'CSV',
  'FEDERATED',
  'INNODB',
  'MEMORY',
  'MRG_MYISAM',
  'MYISAM',
  'NDB',
  'NDBCLUSTER',
  'PERFORMANCE_SCHEMA',
  'TOKUDB',
  'REPEATABLE',
  'COMMITTED',
  'UNCOMMITTED',
  'SERIALIZABLE',
  'GEOMCOLLECTION',
  'GEOMETRY',
  'LINESTRING',
  'MULTILINESTRING',
  'MULTIPOINT',
  'MULTIPOLYGON',
  'POINT',
  'POLYGON',

  'CATALOG_NAME',
  'CHARSET',
  'COLLATION',
  'ENGINE_ATTRIBUTE',
  'FORMAT',
  'SECONDARY_ENGINE_ATTRIBUTE',
  'SCHEMA_NAME',
];

export const snippets = [];
