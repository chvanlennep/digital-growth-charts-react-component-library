export interface ChartStyle{
    backgroundColour?: string, 
    width?: number, 
    height?: number,
    padding?: Padding,
    titleStyle?: TextStyle,
    subTitleStyle?: TextStyle,
    tooltipBackgroundColour?: string,
    tooltipStroke?: string,
    tooltipTextStyle?: TextStyle,   // the text size is not in pts, but is a strokeWidth as text is an svg
    termFill?: string,
    termStroke?: string,
    infoBoxFill?: string,
    infoBoxStroke?: string
    infoBoxTextStyle?: TextStyle  // the text size is not in pts, but is a strokeWidth as text is an svg
    toggleButtonInactiveColour: string
    toggleButtonActiveColour: string
    toggleButtonTextColour: string
}
export interface MeasurementStyle{
    measurementFill?: string, 
    measurementSize?: number, 
}
export interface CentileStyle{
    centileStroke?: string, 
    centileStrokeWidth?: number, 
    delayedPubertyAreaFill?: string 
}
export interface GridlineStyle{
    gridlines?: boolean, 
    stroke?: string, 
    strokeWidth?: number, 
    dashed?: boolean
}
export interface AxisStyle{
    axisStroke?: string, 
    axisLabelTextStyle?: TextStyle, 
    tickLabelTextStyle?: TextStyle
}

export interface Padding {
    left?: number,
    right?: number,
    top?: number,
    bottom?: number
}
export interface TextStyle {

    name?: string,
    colour?: string,
    size?: number,
    weight?: 'bold' | 'italic' | 'regular'
}