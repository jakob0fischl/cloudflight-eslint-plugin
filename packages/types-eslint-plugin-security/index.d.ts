import type {Linter} from 'eslint';

declare const pluginSecurity: {
    readonly configs: {
        readonly recommended: {
            readonly rules: Readonly<Linter.RulesRecord>;
        };
    };
};

export = pluginSecurity;
