var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                  ###           ",
   "                             bigmoney              ##      ##    ##!##          ",
   "                                    $$     ##                  #!!!#          ",
   "                                                                 ##!##          ",
   "                                   #####                          #*#           ",
   "               hahaha                                                       ##  ",
   "  ##                                      $$                               #  ",
   "  #                     $                                                   #  ",
   "  #                                      #####                             $#  ",
   "  #          ####       $                                                   #  ",
   "  #  @       #  #                                                #####       #  ",
   "  ############  ###############   ####################     #######   #########  ",
   "                              #   #                  #     #                    ",
   "                              #!!!#                  #!!!!!#                    ",
   "                              #!!!#                  #!!!!!#                    ",
   "                              #####                  #######                    ",
   "                                                                                ",
   "                                                                                "],
  ["                                      #!!#                        #######                                    #!#  ",
   "                                      #!!#                     ####     ####                                 #!#  ",
   "                                      #!!##########           ##           ##                                #!#  ",
   "                                      ##!!!!!!!!!!##         ##             ##                               #!#  ",
   "                                       ##########!!#         #                                    $  $  $ #!#  ",
   "                                                ##!#         #     $  $                                   ##!#  ",
   "                                                 #!#         #                                ###############!!#  ",
   "                                                 #*#         #     #   #                        !!!!!!!!!!!!!!##  ",
   "                                                             ##  |   |   |  ##            #####################   ",
   "                                                              ##!!!!!!!!!!!##            *                        ",
   "                                                               ####!!!!!####                                      ",
   "                                               #     #            #######        ###         ###                  ",
   "                                               #     #                           # #         # #                  ",
   "                                               #     #                             #         #                    ",
   "                                               #     #                             ##        #                    ",
   "                                               ##    #                             #         #                    ",
   "                                               #     #      $ $    #   #         #         #                    ",
   "               #######        ###   ###        #     #               #   #         #         #                    ",
   "              ##     ##         #   #          #     #     ######    #   #   #########       #                    ",
   "             ##       ##        # $#          #    ##               #   #   #               #                    ",
   "     @       #         #        #   #          #     #               #   #   #               #                    ",
   "    ###      #         #        #   #          #     #               #   #####   ######      #                    ",
   "    # #      #         #       ## $##         #     #               #     $    # #         #                    ",
   "!!!!# #!!!!!!#         #!!!!!!##     ##!!!!!!!!##    #!!!!!!!!!!     #     =     # #         #                    ",
   "!!!!# #!!!!!!#         #!!!!!##       ##########     #!!!!!!!##!     ############# ##  $$ ##                    ",
   "!!!!# #!!!!!!#         #!!!!!#    $                ##!!!!!!## !                    ##     ##                     ",
   "!!!!# #!!!!!!#         #!!!!!#                     ##!!!!!!##  !                     #######                      ",
   "!!!!# #!!!!!!#         #!!!!!##       ##############!!!!!!##   !                                                  ",
   "!!!!# #!!!!!!#         #!!!!!!#########!!!!!!!!!!!!!!!!!!##    !                                                  ",
   "!!!!# #!!!!!!#         #!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!##     !                                                  "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                        $                                                                    ",
   "                                                                                                              ",
   "                                        #                                                                     ",
   "                                        #                                                                     ",
   "                                        #                                                                     ",
   "                                        #                                                                     ",
   "                                       ###                                                                    ",
   "                                       # #                 !!!        !!!  ###                                ",
   "                                       # #                 !#!        !#!                                     ",
   "                                     ### ###                #          #                                      ",
   "                                      #   #                 #   $$$$  #       ###                            ",
   "                                      #   #                 #          #      #!!!#                           ",
   "                                      #   #                 ############       ###                            ",
   "                                     ##   ##      #   #      #                                                ",
   "                                      #   #########   ########              # #                               ",
   "                                      #   #           #                    #!!!#                              ",
   "                                      #   #           #                     ###                               ",
   "                                     ##   ##          #                                                       ",
   "                                      #   #= = = =    #            ###                                        ",
   "                                      #   #           #           #!!!#                                       ",
   "                                      #   #    = = = =#     $     ###       ###                              ",
   "                                     ##   ##          #                     #!!!#                             ",
   "                              $  $                  #     #                ##*        ###                   ",
   "                                      #               #              #                 #!!!#                  ",
   "                             ### ### ### ###     $$ #!!!!!!!!!!!!!!#                   *#                   ",
   "                             # ### # # ### #          #!!!!!!!!!!!!!!#                                        ",
   "                             #             #   #######################                                        ",
   "                             ##           ##                                         ###                      ",
   "  ###                         #     #     #                                         #!!!#                ###  ",
   "  # #                         #    ###    #                                          ###                 # #  ",
   "  #      hard                #    ###    #######                        #####                             #  ",
   "  #       level               #           #                              #   #                             #  ",
   "  #        bro                ##          #                              # # #                             #  ",
   "  #                                               |####|    |####|     ### ###                             #  ",
   "  #                ###             $$                                  #         ###                     #  ",
   "  #               #####       ##          #                             ###       #!!!#          #         #  ",
   "  #               $###$      #    ###    #                             # #        ###          ###        #  ",
   "  #                ###        #############  # $$#    # $$#    # $$ ## ##                    ###        #  ",
   "  #      @          #         #           #!!#    #!!!!#    #!!!!#    ##   ##                    #         #  ",
   "  #############################           #############################     ################################  ",
   "                                                                                                              ",
   "                                                                                                              "],
  ["                                                                                                  ### #       ",
   "                                                                                                      #       ",
   "                                                                                                  #####       ",
   "                                                                                                  #           ",
   "                                                                                                  # ###       ",
   "                          $                                                                      # # #       ",
   "                                                                                             $$$### #       ",
   "                   ###                                                                                #       ",
   "       !  $ !                                                ##### ##### ##### ##### ##### ##### #####       ",
   "       #     #                                                #   # #   # #   # #   # #   # #   # #           ",
   "       #= $ #            #                                   ### # ### # ### # ### # ### # ### # #####       ",
   "       #     #                                                  # #   # #   # #   # #   # #   # #     #       ",
   "       !  $ !            $                                 #### ##### ##### ##### ##### ##### #######       ",
   "                                                                                                              ",
   "          $             ###                              ##                                                  ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                      ##                                                      ",
   "                   ###         ###                                                                            ",
   "                                                                                                              ",
   "                          $                                                    #      #                      ",
   "                                                          ##     ##                                           ",
   "             ###         ###         ###                                 #                  #                 ",
   "                                                                                                              ",
   "                                                                 ||                                           ",
   "  ###########                                                                                                 ",
   "  #         # $######### $######### $##                                                #                   ",
   "  #         #   #       #   #       #   #                 ||                  #     #                         ",
   "  #  @      #####   $  #####   $  #####                                                                     ",
   "  #######                                     #####       ##     ##     ###                                   ",
   "        #=                  =                =#   #                     ###                                   ",
   "        #######################################   #!!!!!!!!!!!!!!!!!!!!!###!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  ############################################################",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
