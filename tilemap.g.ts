// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007070707000000000000000107070707020000010707070702000006000000000000000000000000080000060000000000000000000000000800000600000000000000000000000008000006000000000000000000000000080000030505050504000003050505050400000000000000050505050000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
2 . . . . . . 2 2 . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . 2 2 . . . . . . 2 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tilePath6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
