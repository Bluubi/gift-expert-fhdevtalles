export interface GiphModel {
    id: string;
    title: string;
    images: ImagesModel;
}

export interface ImagesModel {
    original: FixedHeightModel;
}

export interface FixedHeightModel {
    height:    string;
    width:     string;
    size:      string;
    url:       string;
}
