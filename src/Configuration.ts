interface Config {
    appName: string;
    theme: string;
}

const config: Config = {
    appName: 'Neighborhood',
    theme: 'Neighborhood'
}

export default config

document.title = config.appName