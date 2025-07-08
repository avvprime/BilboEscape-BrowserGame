/*
* Current structure of RendererManager there is no need for Camera.
* All transformations applied to the world canvas.
*/
export default class Camera {

    position = {
        x: 0,
        y: 0
    };

    zoom = {
        x: 1,
        y: 1
    };

    width: number = 1128;
    height: number = 615;

    constructor() {

    }

    public screenToWorld(x: number, y: number): any {
        return {
            x: x / this.zoom.x + this.position.x,
            y: y / this.zoom.y + this.position.y
        }
    }

    public worldToScreen(x: number, y: number): any {
        return {
            x: Math.round((x - this.position.x) * this.zoom.x),
            y: Math.round((y - this.position.y) * this.zoom.y)
        }
    }

    public setZoom(zx: number, zy: number, px: number, py: number): void {
        const worldPosBeforeZoom = this.worldToScreen(px, py);
        
        this.zoom.x = zx;
        this.zoom.y = zy;

        const worldPosAfterZoom = this.worldToScreen(px, py);

        const offset = {
            x: worldPosBeforeZoom.x - worldPosAfterZoom.x,
            y: worldPosBeforeZoom.y - worldPosAfterZoom.y
        };

        this.position.x += offset.x;
        this.position.y += offset.y;
    }

    public centerOn(worldX: number, worldY: number) {
        this.position.x = (worldX * this.zoom.x - this.width / 2);
        this.position.y = (worldY * this.zoom.y - this.height / 2);
    }

    public resize(newWidth: number, newHeight: number): void {
        this.width = newWidth;
        this.height = newHeight;
    }


}