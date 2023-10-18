export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    build: string;
    html: string;
    entry: string;

}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
}
