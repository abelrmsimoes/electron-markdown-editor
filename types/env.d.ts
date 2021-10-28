
    interface IBaseEnv {[key: string]: string}
    interface productionEnv extends IBaseEnv {"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true}
interface developmentEnv extends IBaseEnv {"BASE_URL":"/","MODE":"development","DEV":true,"PROD":false}
interface testEnv extends IBaseEnv {"BASE_URL":"/","MODE":"test","DEV":true,"PROD":false}
    type ImportMetaEnv = Readonly<productionEnv | developmentEnv | testEnv>
  