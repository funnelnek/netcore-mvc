import { PointerCoordinate } from '../types/pointer-coordinate.type';


export function getPointerCoordinate(e: MouseEvent | PointerEvent | TouchEvent): PointerCoordinate {
    let target = e.currentTarget as HTMLElement;    
    let coordinate: PointerCoordinate;
    

    if (e instanceof TouchEvent) {
        let touch = e.targetTouches[0];
        target = touch.target as HTMLElement;
        
        coordinate = { 
            x: ((touch.pageX - target.offsetLeft) * 100) / target.offsetWidth,
            y: ((touch.pageY - target.offsetTop) * 100) / target.offsetHeight
        };

        return coordinate;
    }

    coordinate = { 
        x: ((e.pageX - target.offsetLeft) * 100) / target.offsetWidth,
        y: ((e.pageY - target.offsetTop) * 100) / target.offsetHeight
    };
      
    return coordinate;
}