namespace SpriteKind {
    export const Virtical = SpriteKind.create()
    export const Horizontal = SpriteKind.create()
}
function Level8 () {
    Put_in_level(Driver, 72, 96)
    Put_in_level(CarV2, 40, 32)
    Put_in_level(TaxiV2, 56, 32)
    Put_in_level(JeepV2, 40, 64)
    Put_in_level(CarH2, 48, 88)
    Put_in_level(TaxiH2, 64, 56)
    Put_in_level(Car_2H2, 112, 24)
    Put_in_level(Minivan_2H2, 80, 24)
    Put_in_level(MinivanH2, 112, 72)
    Put_in_level(PartyBusH3, 104, 104)
    Put_in_level(SchoolBusH3, 88, 40)
    Put_in_level(TruckV3, 88, 72)
    Make_Invisible(JeepH2)
    Make_Invisible(LimoV3)
    Make_Invisible(TrailerCarH3)
    Make_Invisible(Car_2V2)
    Make_Invisible(Car_3V2)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    moveV(-16)
})
function Create_Charecters () {
    Driver = sprites.create(img`
        ........b.......
        ....ff2222ff....
        ..2ff222222ff2..
        .22222222222222.
        2222222222222222
        2222222222222222
        2222222222222222
        2222222222222222
        22222ffffff22222
        222ffffffffff222
        f2ffffffffffff2f
        222ffffffffff222
        2f2ffffffffff2f2
        2f22ffffffff22f2
        2ff2ffffffff2ff2
        2ff22f2222f22ff2
        2ff2222222222ff2
        2ff2222222222ff2
        2ff2222222222ff2
        2fff22222222fff2
        2fff22222222fff2
        2fff22222222fff2
        2fff22222222fff2
        2fff22222222fff2
        2ff22f2222f22ff2
        2ff2ffffffff2ff2
        2f22ffffffff22f2
        2f2ffffffffff2f2
        2f2ffffffffff2f2
        222ffffffffff222
        .22fff2222fff22.
        ..222222222222..
        `, SpriteKind.Virtical)
    LimoV3 = sprites.create(img`
        ........b.......
        ....ffccccff....
        ..cffccccccffc..
        .cccccccccccccc.
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccffffffccccc
        cccffffffffffccc
        fcffffffffffffcf
        cccffffffffffccc
        cfcffffffffffcfc
        cfccffffffffccfc
        cffcffffffffcffc
        cffccfccccfccffc
        cffccccccccccffc
        cffccccccccccffc
        cffccccccccccffc
        cffccccccccccffc
        cffccccccccccffc
        cffccccccccccffc
        cffccccccccccffc
        cffccccccccccffc
        cffccccccccccffc
        cffccccccccccffc
        cfffccccccccfffc
        cfffccccccccfffc
        ccffccccccccffcc
        cfccccccccccccfc
        cfffccccccccfffc
        cfffccccccccfffc
        cfffccccccccfffc
        cfffccccccccfffc
        cfffccccccccfffc
        cfffccccccccfffc
        cffccfccccfccffc
        cffcffffffffcffc
        cfccffffffffccfc
        cfcffffffffffcfc
        cfcffffffffffcfc
        cccffffffffffccc
        .ccfffccccfffcc.
        ..cccccccccccc..
        `, SpriteKind.Virtical)
    SchoolBusH3 = sprites.create(img`
        ..55ffffffffffffffffffffffffffffffff5ff555555...
        .55f55fffffffffffffffffffffffffffff5ffff555555..
        55ff5555555555555555555555555555555ffffff555555.
        5fff55ccccccccccccccccccccccccccc55ffffff55555f.
        5fff5c555555555555555555555555555c5ffffffccc55f.
        5fff5c555555555555555555555555555c5fffffff55ccc.
        5fff5c555555555555555555555555555c5fffffff55555.
        5fff5c555555555555555555555555555c5fffffff55555.
        5fff5c555555555555555555555555555c5fffffff55555b
        5fff5c555555555555555555555555555c5fffffff55555.
        5fff5c555555555555555555555555555c5fffffff55ccc.
        5fff5c555555555555555555555555555c5ffffffccc55f.
        5fff55ccccccccccccccccccccccccccc55ffffff55555f.
        55ff5555555555555555555555555555555ffffff555555.
        .55f55fffffffffffffffffffffffffffff5ffff555555..
        ..55ffffffffffffffffffffffffffffffff5ff555555...
        `, SpriteKind.Horizontal)
    JeepV2 = sprites.create(img`
        ........b.......
        ....eeeeeeee....
        ...ee444444ee...
        ..eff444444ffe..
        .eeee4eeee4eeee.
        .eeee4eeee4eeee.
        deeee4eeee4eeeed
        .eeee4eeee4eeee.
        feeee4eeee4eeeef
        feee44444444eeef
        feee4ffffff4eeef
        feeffffffffffeef
        feffffffffffffef
        .effffffffffffe.
        .effffffffffffe.
        .efe44444444efe.
        .eef44444444fee.
        .eff44444444ffe.
        44ff44444444ff44
        e4ff44444444ff4e
        .4ff44444444ff4.
        .efe44444444efe.
        .eeeffffffffeee.
        .effffffffffffe.
        .e4e44444444e4e.
        fe4eeeeeeeeee4ef
        fe444444444444ef
        fe444444444444ef
        fe444444444444ef
        fe444444444444ef
        .ee4444444444ee.
        ..eeeeeeeeeeee..
        `, SpriteKind.Virtical)
    JeepH2 = sprites.create(img`
        ..fffff.....dc.....fffff........
        .ddddddddddcccdddddddddddddd....
        ddccccccfdfffffdffffddddddddd...
        dcccccddfddfffffdffffdddddddfd..
        dcccccdcffcccccccffffccdddddfdd.
        dcccccdcffcccccccfffffccccccccd.
        dcccccdcffcccccccfffffcdddddccd.
        dcccccdcffcccccccfffffcdddddccd.
        dcccccdcffcccccccfffffcdddddccdb
        dcccccdcffcccccccfffffcdddddccd.
        dcccccdcffcccccccfffffccccccccd.
        dcccccdcffcccccccffffccdddddfdd.
        dcccccddfddfffffdffffdddddddfd..
        ddccccccfdfffffdffffddddddddd...
        .ddddddddddcccdddddddddddddd....
        ..fffff.....dc.....fffff........
        `, SpriteKind.Horizontal)
    TruckV3 = sprites.create(img`
        ........b.......
        ..7ffeeeeeeff7..
        .7777eaaaae7777.
        77777eaaaae77777
        7777eaaaaaae7777
        7777eaaaaaae7777
        7777effffffe7777
        77ffffffffffff77
        7ffffffffffffff7
        ffffffffffffffff
        ffffffffffffffff
        7ffffffffffffff7
        f7ffffffffffff7f
        ff777777777777ff
        ff777777777777ff
        f77777777777777f
        ff777777777777ff
        ff777eeeeee777ff
        f777eaaaaaae777f
        ff77eaaaaaae77ff
        ff77eaaaaaae77ff
        f777eaaaaaae777f
        ff77eaaaaaae77ff
        ff77eaaaaaae77ff
        f777eaaaaaae777f
        ff77eaaaaaae77ff
        ff77eaaaaaae77ff
        f777eaaaaaae777f
        ff77eaaaaaae77ff
        ff77eaaaaaae77ff
        f777eaaaaaae777f
        ff77eaaaaaae77ff
        ff77eaaaaaae77ff
        f777eaaaaaae777f
        ff77eaaaaaae77ff
        ff77eaaaaaae77ff
        f777eaaaaaae777f
        ff77eaaaaaae77ff
        ff77eaaaaaae77ff
        f777eaaaaaae777f
        ff777eeeeee777ff
        ff777777777777ff
        f77777777777777f
        f77777777777777f
        effffffffffffffe
        eeffffffffffffee
        .eeffffffffffee.
        ..eeeeeeeeeeee..
        `, SpriteKind.Virtical)
    PartyBusH3 = sprites.create(img`
        ..99ffffffffffffffffffffffffffffffff9ff999999...
        .99f99fffffffffffffffffffffffffffff9ffff999999..
        99ff9999999999999999999999999999999ffffff999999.
        9fff999999999ccccc99999999ddddd9999ffffff99999f.
        9fff999999999111cc99dd99ddddfddd999ffffff66699f.
        9fff9999999991ffcc9dddddddfddddd999fffffff99666.
        9fff9999f9f99111cc9dddddccddfdddd99fffffff99999.
        9fff999ccccff111ccfffffcffcdfdddd99fffffff99999.
        9fff999ccccff1ffccfffffcffcdfdddd99fffffff99999b
        9fff9999f9f99111cc9dddddccddfdddd99fffffff99999.
        9fff9999999991ffcc9ddddddddddddd999fffffff99666.
        9fff999999999111cc99dd99dddddddd999ffffff66699f.
        9fff999999999ccccc99999999ddddd9999ffffff99999f.
        99ff9999999999999999999999999999999ffffff999999.
        .99f99fffffffffffffffffffffffffffff9ffff999999..
        ..99ffffffffffffffffffffffffffffffff9ff999999...
        `, SpriteKind.Horizontal)
    TaxiV2 = sprites.create(img`
        ........b.......
        ....cc5555cc....
        ..555555555555..
        .55555555555555.
        5555555555555555
        5555555555555555
        5555555555555555
        5555555555555555
        55555ffffff55555
        555ffffffffff555
        c5ffffffffffff5c
        555ffffffffff555
        5f5ffffffffff5f5
        5f55ffffffff55f5
        5ff5555555555ff5
        5ff5555555555ff5
        5ff5555555555ff5
        5ff5555555555ff5
        5ff5555ff5555ff5
        5fff5ccffcc5fff5
        5fff555ff555fff5
        5fff55555555fff5
        5fff55555555fff5
        5fff55555555fff5
        5ff5555555555ff5
        5ff5ffffffff5ff5
        5f55ffffffff55f5
        5f5ffffffffff5f5
        5f5ffffffffff5f5
        555ffffffffff555
        .55fff5555fff55.
        ..555555555555..
        `, SpriteKind.Virtical)
    TaxiH2 = sprites.create(img`
        ..555555555555555555ff555555....
        .55ffffffffffffffff5555555555...
        555555fffffffffff5555f55555555..
        5ffff555fffff555555ffff555555f..
        5ffffff55555555555fffff555555ff.
        5ffffff55555f55555ffffff555555f.
        55fffff55555f55555ffffff5555555.
        555fffff55ffff555ffffffff555555.
        555fffff55ffff555ffffffff555555b
        55fffff55555f55555ffffff5555555.
        5ffffff55555f55555ffffff555555f.
        5ffffff55555555555fffff555555ff.
        5ffff555fffff555555ffff555555f..
        555555fffffffffff5555f55555555..
        .55ffffffffffffffff5555555555...
        ..555555555555555555ff555555....
        `, SpriteKind.Horizontal)
    CarH2 = sprites.create(img`
        ..888888888888888888ff888888....
        .88ffffffffffffffff8888888888...
        888888fffffffffff8888f88888888..
        8ffff888fffff888888ffff888888f..
        8ffffff88888888888fffff888888ff.
        8ffffff88888888888ffffff888888f.
        88fffff88888888888ffffff8888888.
        88ffffff888888888ffffffff888888.
        88ffffff888888888ffffffff888888b
        88fffff88888888888ffffff8888888.
        8ffffff88888888888ffffff888888f.
        8ffffff88888888888fffff888888ff.
        8ffff888fffff888888ffff888888f..
        888888fffffffffff8888f88888888..
        .88ffffffffffffffff8888888888...
        ..888888888888888888ff888888....
        `, SpriteKind.Horizontal)
    CarV2 = sprites.create(img`
        ........b.......
        ....cc3333cc....
        ..333333333333..
        .33333333333333.
        3333333333333333
        3333333333333333
        3333333333333333
        3333333333333333
        33333ffffff33333
        333ffffffffff333
        c3ffffffffffff3c
        333ffffffffff333
        3f3ffffffffff3f3
        3f33ffffffff33f3
        3ff3333333333ff3
        3ff3ffffffff3ff3
        3ff3ffffffff3ff3
        3ff3ffffffff3ff3
        3ff33ffffff33ff3
        3fff33333333fff3
        3fff33333333fff3
        3fff33333333fff3
        3fff33333333fff3
        3fff33333333fff3
        3ff3333333333ff3
        3ff3ffffffff3ff3
        3f33ffffffff33f3
        3f3ffffffffff3f3
        3f3ffffffffff3f3
        333ffffffffff333
        .33fff3333fff33.
        ..333333333333..
        `, SpriteKind.Virtical)
    TrailerCarH3 = sprites.create(img`
        ..ffff.............fffff....dc.....fffff........
        .4ffff44444444....eeeeeeeeeecceeeeeeeeeeeeee....
        4444444eeeeee44..eeccccccfeffffeffffeeeeeeeee...
        4eeeeeeeeeeeee4..eccccceefeeffffeffffeeeeeeefe..
        4eeeeeeeeeeeee4..eccccce4ffccccccffff44eeeeefee.
        4eeeeeeeeeeeee4..eccccce4ffccccccfffff44444444e.
        4eeeeeeeeeeeee4.feccccce4ffccccccfffff4eeeee44e.
        4eeeeeeeeeeeeee4.eccccce4ffccccccfffff4eeeee44e.
        4eeeeeeeeeeeeee4.eccccce4ffccccccfffff4eeeee44eb
        4eeeeeeeeeeeee4.feccccce4ffccccccfffff4eeeee44e.
        4eeeeeeeeeeeee4..eccccce4ffccccccfffff44444444e.
        4eeeeeeeeeeeee4..eccccce4ffccccccffff44eeeeefee.
        4eeeeeeeeeeeee4..eccccceefeeffffeffffeeeeeeefe..
        4444444eeeeee44..eeccccccfeffffeffffeeeeeeeee...
        .4ffff44444444....eeeeeeeeeecceeeeeeeeeeeeee....
        ..ffff.............fffff....dc.....fffff........
        `, SpriteKind.Horizontal)
    Car_2H2 = sprites.create(img`
        ..111111111111111111ff111111....
        .11ffffffffffffffff1111111111...
        111111fffffffffff1111f11111111..
        1ffff111fffff111111ffff111111f..
        1ffffff11111111111fffff111111ff.
        1ffffff11111111111ffffff111111f.
        11fffff11111111111ffffff1111111.
        11fffff11111111111fffffff111111.
        11fffff11111111111fffffff111111b
        11fffff11111111111ffffff1111111.
        1ffffff11111111111ffffff111111f.
        1ffffff11111111111fffff111111ff.
        1ffff111fffff111111ffff111111f..
        111111fffffffffff1111f11111111..
        .11ffffffffffffffff1111111111...
        ..111111111111111111ff111111....
        `, SpriteKind.Horizontal)
    MinivanH2 = sprites.create(img`
        .ddddddddddddddddddddffddddd....
        dddffffffffdffffffffddddddddd...
        ddddddffffdfffffffddddfddddddd..
        dffffdddffdffdddddddffffdddddf..
        dffffffddddddddddbdfffffdddddff.
        dffffffdbbbbbbbbbbdffffffdddddf.
        ddfffffddddddddddbdffffffdddddd.
        ddfffffddddddddddddfffffffddddd.
        ddfffffddddddddddddfffffffdddddb
        ddfffffddddddddddbdffffffdddddd.
        dffffffdbbbbbbbbbbdffffffdddddf.
        dffffffddddddddddbdfffffdddddff.
        dffffdddffdffdddddddffffdddddf..
        ddddddffffdfffffffddddfddddddd..
        dddffffffffdffffffffddddddddd...
        .ddddddddddddddddddddffddddd....
        `, SpriteKind.Horizontal)
    Minivan_2H2 = sprites.create(img`
        .ccccccccccccccccccccffccccc....
        cccffffffffcffffffffccccccccc...
        ccccccffffcfffffffccccfccccccc..
        cffffcccffcffcccccccffffcccccf..
        cffffffcccccccffffcfffffcccccff.
        cffffffccccccfffffcffffffcccccf.
        ccfffffccccccfffffcffffffcccccc.
        ccfffffccccccfffffcfffffffccccc.
        ccfffffccccccfffffcfffffffcccccb
        ccfffffccccccfffffcffffffcccccc.
        cffffffccccccfffffcffffffcccccf.
        cffffffcccccccffffcfffffcccccff.
        cffffcccffcffcccccccffffcccccf..
        ccccccffffcfffffffccccfccccccc..
        cccffffffffcffffffffccccccccc...
        .ccccccccccccccccccccffccccc....
        `, SpriteKind.Horizontal)
    Car_2V2 = sprites.create(img`
        ........c.......
        ....cccccccc....
        ..cccccccccccc..
        .cccccccccccccc.
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccccccccccccc
        cccccffffffccccc
        cccffffffffffccc
        fcffffffffffffcf
        cccffffffffffccc
        cfcffffffffffcfc
        cfccffffffffccfc
        cffccccccccccffc
        cfffccccccccfffc
        cfffccccccccfffc
        cfffccccccccfffc
        cfffccccccccfffc
        cffffccccccffffc
        cffffccccccffffc
        cffffccccccffffc
        cfffccccccccfffc
        cfffccccccccfffc
        cffccccccccccffc
        cffcffffffffcffc
        cfccffffffffccfc
        cfcffffffffffcfc
        cfcffffffffffcfc
        cccffffffffffccc
        .ccfffccccfffcc.
        ..cccccccccccc..
        `, SpriteKind.Virtical)
    Car_3V2 = sprites.create(img`
        ........b.......
        ....dddddddd....
        ..dddddddddddd..
        .dddddddddddddd.
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddddddddddddd
        dddddffffffddddd
        dddffffffffffddd
        fdffffffffffffdf
        dddffffffffffddd
        dfdffffffffffdfd
        dfddffffffffddfd
        dffddddddddddffd
        dffddddddddddffd
        dfffddddddddfffd
        dfffddddddddfffd
        dfffddddddddfffd
        ddffddddddddffdd
        dfddddddddddddfd
        dfffddddddddfffd
        dfffddddddddfffd
        dfffddddddddfffd
        dffddddddddddffd
        dffdffffffffdffd
        dfddfffddfffddfd
        dfdffffffffffdfd
        dfdffffffffffdfd
        dddffffffffffddd
        .ddfffddddfffdd.
        ..dddddddddddd..
        `, SpriteKind.Virtical)
}
function Colors2 () {
    color.setColor(11, color.rgb(101, 101, 101))
    color.setColor(9, color.rgb(0, 30, 225))
    color.setColor(8, color.rgb(0, 30, 150))
    color.setColor(10, color.rgb(78, 197, 0))
    color.setColor(12, color.rgb(50, 50, 50))
    color.setColor(5, color.rgb(220, 220, 7))
    color.setColor(4, color.rgb(79, 70, 37))
}
function Level2 () {
    Put_in_level(Driver, 72, 98)
    Put_in_level(LimoV3, 40, 40)
    Put_in_level(TruckV3, 88, 40)
    Put_in_level(CarV2, 88, 80)
    Put_in_level(JeepH2, 64, 56)
    Put_in_level(TaxiH2, 48, 104)
    Put_in_level(JeepV2, 104, 96)
    Put_in_level(CarH2, 112, 72)
    Make_Invisible(PartyBusH3)
    Make_Invisible(TaxiV2)
    Make_Invisible(SchoolBusH3)
    Make_Invisible(TrailerCarH3)
    Make_Invisible(MinivanH2)
    Make_Invisible(Car_2H2)
    Make_Invisible(Minivan_2H2)
    Make_Invisible(Car_2V2)
    Make_Invisible(Car_3V2)
}
function Level3 () {
    Put_in_level(Driver, 72, 80)
    Put_in_level(SchoolBusH3, 56, 104)
    Put_in_level(PartyBusH3, 56, 56)
    Put_in_level(CarH2, 96, 72)
    Put_in_level(TaxiH2, 112, 24)
    Put_in_level(TruckV3, 88, 40)
    Put_in_level(LimoV3, 120, 56)
    Make_Invisible(JeepV2)
    Make_Invisible(JeepH2)
    Make_Invisible(TaxiV2)
    Make_Invisible(CarV2)
    Make_Invisible(TrailerCarH3)
    Make_Invisible(MinivanH2)
    Make_Invisible(Car_2H2)
    Make_Invisible(Minivan_2H2)
    Make_Invisible(Car_2V2)
    Make_Invisible(Car_3V2)
}
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    moveV(16)
})
function Go_to_level (extra: boolean) {
    if (Level == 1) {
        Level1()
        game.splash("Naj se zabava zacne ;)")
    } else if (Level == 2) {
        Level2()
        game.splash("Enostavno, ne? Kaj pa ta?")
    } else if (Level == 3) {
        Level3()
        game.splash("Meh. Mogoce ta?")
    } else if (Level == 4) {
        Level4()
        game.splash("Ok. Zdej pa zares.")
    } else if (Level == 5) {
        Level5()
        game.splash("Ti ze gre na zivce?")
    } else if (Level == 6) {
        Level6()
        game.splash("Juhu! Uspelo ti je!")
        game.splash("Dosegla si 6. stopnjo!")
        game.splash("... od desetih.")
    } else if (Level == 7) {
        Level7()
        game.splash("Ti je ze vsec ratalo?")
        game.splash("Ne?")
        game.splash("Smola")
    } else if (Level == 8) {
        Level8()
        game.splash("Sej zdej si pa ze blizu.")
    } else if (Level == 9) {
        Level9()
        game.splash("Ok. Ta je pa zadnja.")
    } else if (extra) {
        for (let value of V_list) {
            value.setFlag(SpriteFlag.Invisible, true)
        }
        for (let value2 of H_list) {
            value2.setFlag(SpriteFlag.Invisible, true)
        }
        game.setDialogFrame(img`
            f f f f f f f f f f f f f f f f 
            f c c c c c c c c c c c c c c f 
            f c b b b b b b b b b b b b c f 
            f c b 1 1 1 1 1 1 1 1 1 1 b c f 
            f c b 1 1 1 1 1 1 1 1 1 1 b c f 
            f c b 1 1 1 1 1 1 1 1 1 1 b c f 
            f c b 1 1 1 1 1 1 1 1 1 1 b c f 
            f c b 1 1 1 1 1 1 1 1 1 1 b c f 
            f c b 1 1 1 1 1 1 1 1 1 1 b c f 
            f c b 1 1 1 1 1 1 1 1 1 1 b c f 
            f c b 1 1 1 1 1 1 1 1 1 1 b c f 
            f c b 1 1 1 1 1 1 1 1 1 1 b c f 
            f c b 1 1 1 1 1 1 1 1 1 1 b c f 
            f c b b b b b b b b b b b b c f 
            f c c c c c c c c c c c c c c f 
            f f f f f f f f f f f f f f f f 
            `)
        game.showLongText("Invalid Level :(", DialogLayout.Full)
        game.reset()
    }
//    if (Level < 10) {
//        game.splash("Level 1" + convertToText(Level))
//    }
}
function MoveH (direction: number) {
    for (let H_sprite of H_list) {
        overlap = false
        for (let V_sprite of V_list) {
            if (H_sprite.overlapsWith(V_sprite)) {
                overlap = true
            }
        }
        for (let value3 of H_list) {
            if (H_sprite.overlapsWith(value3)) {
                if (value3 != H_sprite) {
                    overlap = true
                }
            }
        }
        if (!(overlap)) {
            H_sprite.x += direction
            if (16 == H_sprite.left) {
                H_sprite.x += 0 - direction
            }
            if (144 == H_sprite.right) {
                H_sprite.x += 0 - direction
            }
        }
        for (let V_sprite2 of V_list) {
            if (H_sprite.overlapsWith(V_sprite2)) {
                overlap = true
            }
        }
        for (let value22 of H_list) {
            if (H_sprite.overlapsWith(value22)) {
                if (value22 != H_sprite) {
                    overlap = true
                }
            }
        }
        if (overlap) {
            H_sprite.x += 0 - direction
        }
    }
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    MoveH(-16)
})
function Level1 () {
    Put_in_level(Driver, 72, 64)
    Put_in_level(SchoolBusH3, 56, 40)
    Put_in_level(LimoV3, 88, 40)
    Make_Invisible(JeepV2)
    Make_Invisible(JeepH2)
    Make_Invisible(TruckV3)
    Make_Invisible(PartyBusH3)
    Make_Invisible(TaxiH2)
    Make_Invisible(TaxiV2)
    Make_Invisible(CarH2)
    Make_Invisible(CarV2)
    Make_Invisible(TrailerCarH3)
    Make_Invisible(MinivanH2)
    Make_Invisible(Car_2H2)
    Make_Invisible(Minivan_2H2)
    Make_Invisible(Car_2V2)
    Make_Invisible(Car_3V2)
}
function Level5 () {
    Put_in_level(Driver, 72, 80)
    Put_in_level(TaxiV2, 40, 96)
    Put_in_level(JeepV2, 56, 96)
    Put_in_level(CarV2, 88, 96)
    Put_in_level(CarH2, 112, 104)
    Put_in_level(JeepH2, 96, 72)
    Put_in_level(TaxiH2, 48, 56)
    Put_in_level(TrailerCarH3, 72, 40)
    Put_in_level(SchoolBusH3, 72, 24)
    Put_in_level(PartyBusH3, 88, 56)
    Put_in_level(TruckV3, 120, 40)
    Make_Invisible(MinivanH2)
    Make_Invisible(Car_2H2)
    Make_Invisible(Minivan_2H2)
    Make_Invisible(Car_2V2)
    Make_Invisible(Car_3V2)
    Make_Invisible(LimoV3)
}
function moveV (direction: number) {
    for (let V_sprite3 of V_list) {
        overlap = false
        for (let H_sprite2 of H_list) {
            if (V_sprite3.overlapsWith(H_sprite2)) {
                overlap = true
            }
        }
        for (let value32 of V_list) {
            if (V_sprite3.overlapsWith(value32)) {
                if (value32 != V_sprite3) {
                    overlap = true
                }
            }
        }
        if (!(overlap)) {
            V_sprite3.y += direction
            if (0 == V_sprite3.top) {
                if (V_sprite3.x != 72) {
                    V_sprite3.y += 0 - direction
                }
            }
            if (128 == V_sprite3.bottom) {
                V_sprite3.y += 0 - direction
            }
        }
        for (let H_sprite3 of H_list) {
            if (V_sprite3.overlapsWith(H_sprite3)) {
                overlap = true
            }
        }
        for (let value4 of V_list) {
            if (V_sprite3.overlapsWith(value4)) {
                if (value4 != V_sprite3) {
                    overlap = true
                }
            }
        }
        if (overlap) {
            V_sprite3.y += 0 - direction
        }
    }
}
function Level7 () {
    Put_in_level(Driver, 72, 64)
    Put_in_level(TaxiH2, 48, 56)
    Put_in_level(Car_2H2, 64, 40)
    Put_in_level(Minivan_2H2, 64, 24)
    Put_in_level(TruckV3, 104, 40)
    Put_in_level(JeepV2, 56, 96)
    Put_in_level(CarV2, 40, 32)
    Put_in_level(CarH2, 48, 72)
    Put_in_level(TaxiV2, 40, 96)
    Put_in_level(PartyBusH3, 88, 88)
    Make_Invisible(SchoolBusH3)
    Make_Invisible(LimoV3)
    Make_Invisible(JeepH2)
    Make_Invisible(TrailerCarH3)
    Make_Invisible(MinivanH2)
    Make_Invisible(Car_2V2)
    Make_Invisible(Car_3V2)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    MoveH(16)
})
function Level9 () {
    Put_in_level(Driver, 72, 48)
    Put_in_level(SchoolBusH3, 56, 104)
    Put_in_level(TrailerCarH3, 72, 24)
    Put_in_level(TruckV3, 88, 88)
    Put_in_level(CarH2, 112, 72)
    Put_in_level(TaxiH2, 96, 56)
    Put_in_level(JeepH2, 64, 72)
    Put_in_level(Minivan_2H2, 48, 40)
    Put_in_level(MinivanH2, 64, 88)
    Put_in_level(JeepV2, 104, 32)
    Put_in_level(CarV2, 120, 48)
    Put_in_level(Car_2V2, 120, 96)
    Put_in_level(TaxiV2, 40, 80)
    Make_Invisible(Car_2H2)
    Make_Invisible(Car_3V2)
    Make_Invisible(PartyBusH3)
    Make_Invisible(LimoV3)
}
function Level4 () {
    Put_in_level(Driver, 72, 80)
    Put_in_level(SchoolBusH3, 72, 104)
    Put_in_level(TrailerCarH3, 72, 40)
    Put_in_level(PartyBusH3, 56, 56)
    Put_in_level(CarH2, 112, 104)
    Put_in_level(TaxiH2, 80, 24)
    Put_in_level(JeepH2, 48, 24)
    Put_in_level(TruckV3, 88, 72)
    Put_in_level(CarV2, 120, 32)
    Put_in_level(JeepV2, 104, 32)
    Put_in_level(TaxiV2, 40, 96)
    Put_in_level(TruckV3, 88, 72)
    Make_Invisible(LimoV3)
    Make_Invisible(MinivanH2)
    Make_Invisible(Car_2H2)
    Make_Invisible(Minivan_2H2)
    Make_Invisible(Car_2V2)
    Make_Invisible(Car_3V2)
}
function Put_in_level (Vehicle: Sprite, x: number, y: number) {
    Vehicle.setFlag(SpriteFlag.Ghost, false)
    Vehicle.setFlag(SpriteFlag.Invisible, false)
    Vehicle.setPosition(x, y)
}
function Make_Invisible (Vehicle: Sprite) {
    Vehicle.setFlag(SpriteFlag.Ghost, true)
    Vehicle.setFlag(SpriteFlag.Invisible, true)
}
function Level6 () {
    Put_in_level(Driver, 72, 80)
    Put_in_level(CarV2, 88, 64)
    Put_in_level(TaxiV2, 40, 64)
    Put_in_level(CarH2, 112, 56)
    Put_in_level(JeepH2, 64, 56)
    Put_in_level(TaxiH2, 48, 88)
    Put_in_level(MinivanH2, 48, 40)
    Put_in_level(Car_2H2, 48, 24)
    Put_in_level(Minivan_2H2, 80, 24)
    Make_Invisible(JeepV2)
    Make_Invisible(LimoV3)
    Make_Invisible(SchoolBusH3)
    Make_Invisible(TruckV3)
    Make_Invisible(PartyBusH3)
    Make_Invisible(TrailerCarH3)
    Make_Invisible(Car_2V2)
    Make_Invisible(Car_3V2)
}
let overlap = false
let Car_3V2: Sprite = null
let Car_2V2: Sprite = null
let TrailerCarH3: Sprite = null
let LimoV3: Sprite = null
let JeepH2: Sprite = null
let TruckV3: Sprite = null
let SchoolBusH3: Sprite = null
let PartyBusH3: Sprite = null
let MinivanH2: Sprite = null
let Minivan_2H2: Sprite = null
let Car_2H2: Sprite = null
let TaxiH2: Sprite = null
let CarH2: Sprite = null
let JeepV2: Sprite = null
let TaxiV2: Sprite = null
let CarV2: Sprite = null
let Driver: Sprite = null
let Level = 0
let H_list: Sprite[] = []
let V_list: Sprite[] = []
game.showLongText("Dobrodosla v svet videoigric! Pravila so enostavna: odpeljat avto s parkirisca. Ce se ti ustavi, lahko najdes resitev na githubu ;) Verjetno bo tudi na racunalniku lazje igrat...", DialogLayout.Full)
Colors2()
scene.setBackgroundColor(11)
tiles.setTilemap(tilemap`level_0`)
Create_Charecters()
V_list = sprites.allOfKind(SpriteKind.Virtical)
H_list = sprites.allOfKind(SpriteKind.Horizontal)
for (let V_sprite4 of V_list) {
    V_sprite4.setFlag(SpriteFlag.StayInScreen, true)
    V_sprite4.setFlag(SpriteFlag.Invisible, true)
}
for (let H_sprite4 of H_list) {
    H_sprite4.setFlag(SpriteFlag.StayInScreen, true)
    H_sprite4.setFlag(SpriteFlag.Invisible, true)
}
Level = 1
Go_to_level(true)
game.onUpdate(function () {
    if (Driver.y == 16) {
        if (Level < 9) {
            Level += 1
        } else {
            game.showLongText("Super! Nobenega parkirisca vec! Sedaj pa ...", DialogLayout.Full)
            game.showLongText("Uganka: katero je najmanjše število ki se poveča za 12, ko ga obrnemo na glavo? To stevilo odpre eno od kljucavnic.", DialogLayout.Full)
            game.over(true)
        }
        Go_to_level(false)
    }
})
