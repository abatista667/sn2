interface Config {
    appName: string;
    theme: string;
}

const config: Config = {
    appName: 'social network',
    theme: 'default'
}

export default config

document.title = config.appName