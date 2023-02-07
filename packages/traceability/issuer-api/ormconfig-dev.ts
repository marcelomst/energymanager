import { ConnectionOptions } from 'typeorm';
import { getDBConnectionOptions } from '@energyweb/origin-backend-utils';

const config: ConnectionOptions = {
    ...(getDBConnectionOptions() as ConnectionOptions),
    entities: ['src/**/*.entity.ts'],
    synchronize: false,
    migrationsRun: true,
    migrations: ['migrations/*.ts'],
    migrationsTableName: 'migrations_issuer',
    cli: {
        migrationsDir: 'migrations'
    }
} as any;

export = config;
