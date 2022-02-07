class Tableau1 extends Phaser.Scene {


    preload() {
        // carré
        this.load.image('carre', 'assets/carre.png')
        // cercle
        this.load.image('cercle', 'assets/cercle.png')
    }

    create() {
        this.hauteur = 800
        this.largeur = 800

        // Barre du haut
        this.haut = this.physics.add.image(0, 0, 'carre').setOrigin(0, 0);
        this.haut.setDisplaySize(this.largeur, 20)
        this.haut.body.setAllowGravity(false)
        this.haut.setImmovable(true)


        //Barre de droite

        this.droite = this.physics.add.image(this.largeur - 20, 0, "carre").setOrigin(0, 0);
        this.droite.setDisplaySize(20, this.hauteur)
        this.droite.body.setAllowGravity(false)
        this.droite.setImmovable(true)

        //Barre de gauche

        this.gauche = this.physics.add.image(0, 0, "carre").setOrigin(0, 0);
        this.gauche.setDisplaySize(20, this.hauteur)
        this.gauche.body.setAllowGravity(false)
        this.gauche.setImmovable(true)


        // Balle
        this.balle = this.physics.add.image(this.largeur / 2, this.hauteur - 20, 'cercle').setOrigin(0, 0);
        this.balle.setDisplaySize(20, 20);
        this.balle.body.setBounce(1.05, 1.05);
        this.balle.setVelocityX(0);
        this.balle.setVelocityY(Phaser.Math.Between(300, 450));
        this.balle.body.setMaxVelocity(500);


        //Raquette
        this.raquette = this.physics.add.image(this.largeur / 2, this.hauteur - 20, 'carre').setOrigin(0, 0);
        this.raquette.setDisplaySize(200, 20)
        this.raquette.body.setAllowGravity(false)
        this.raquette.setImmovable(true)
        this.raquette.setTintFill()

        //briques


        this.brique1 = this.physics.add.image(this.largeur -200, this.hauteur /2, 'carre').setOrigin(0, 0);
        this.brique1.setDisplaySize(60, 30)
        this.brique1.body.setAllowGravity(false)
        this.brique1.setImmovable(true)

        this.brique2 = this.physics.add.image(this.largeur -263, this.hauteur /2, 'carre').setOrigin(0, 0);
        this.brique2.setDisplaySize(60, 30)
        this.brique2.body.setAllowGravity(false)
        this.brique2.setImmovable(true)

        this.brique3 = this.physics.add.image(this.largeur -325, this.hauteur /2, 'carre').setOrigin(0, 0);
        this.brique3.setDisplaySize(60, 30)
        this.brique3.body.setAllowGravity(false)
        this.brique3.setImmovable(true)

        this.brique4 = this.physics.add.image(this.largeur -387, this.hauteur /2, 'carre').setOrigin(0, 0);
        this.brique4.setDisplaySize(60, 30)
        this.brique4.body.setAllowGravity(false)
        this.brique4.setImmovable(true)

        this.brique5 = this.physics.add.image(this.largeur -450, this.hauteur /2, 'carre').setOrigin(0, 0);
        this.brique5.setDisplaySize(60, 30)
        this.brique5.body.setAllowGravity(false)
        this.brique5.setImmovable(true)

        this.brique6 = this.physics.add.image(this.largeur -513, this.hauteur /2, 'carre').setOrigin(0, 0);
        this.brique6.setDisplaySize(60, 30)
        this.brique6.body.setAllowGravity(false)
        this.brique6.setImmovable(true)

        this.brique7 = this.physics.add.image(this.largeur -513, this.hauteur /2, 'carre').setOrigin(0, 0);
        this.brique7.setDisplaySize(60, 30)
        this.brique7.body.setAllowGravity(false)
        this.brique7.setImmovable(true)

        this.brique8 = this.physics.add.image(this.largeur -576, this.hauteur /2, 'carre').setOrigin(0, 0);
        this.brique8.setDisplaySize(60, 30)
        this.brique8.body.setAllowGravity(false)
        this.brique8.setImmovable(true)

        this.brique9 = this.physics.add.image(this.largeur -639, this.hauteur /2, 'carre').setOrigin(0, 0);
        this.brique9.setDisplaySize(60, 30)
        this.brique9.body.setAllowGravity(false)
        this.brique9.setImmovable(true)

        let me =this;

        this.physics.add.collider(this.balle, this.gauche);
        this.physics.add.collider(this.balle, this.droite);
        this.physics.add.collider(this.balle, this.haut);

        this.physics.add.collider(this.balle, this.raquette, function (){
            me.rebond(me.raquette)
        });
        this.physics.add.collider(this.balle, this.brique1, function (){
            me.rebond(me.brique1)
        });
        this.physics.add.collider(this.balle, this.brique2, function (){
            me.rebond(me.brique2)
        });
        this.physics.add.collider(this.balle, this.brique3, function (){
            me.rebond(me.brique3)
        });
        this.physics.add.collider(this.balle, this.brique4, function (){
            me.rebond(me.brique4)
        });

        this.joueur = new Joueur('Score : ', 'joueur')

        console.log(this.joueur)

        this.balleAucentre();
        this.initKeyboard();
    }

    //disparition des briques
    // Condition : if balle entre en collision avec brique ; brique disparait

    rebond(raquette) {

        let me = this;

        console.log(raquette.y)
        console.log(me.balle.y)
        console.log((me.balle.y) - (raquette.y))

        let hauteurRaquette = raquette.displayHeight;

        let positionRelativeRaquette = (this.balle.y - raquette.y);

        positionRelativeRaquette = (positionRelativeRaquette / hauteurRaquette);

        positionRelativeRaquette = (positionRelativeRaquette * 2 - 1);
        console.log(positionRelativeRaquette);

        this.balle.setVelocityY(this.balle.body.velocity.y + positionRelativeRaquette * hauteurRaquette)
    }

    balleAucentre() {
        this.balle.x = this.largeur / 2
        this.balle.y = this.hauteur / 2
        this.speedX = 0

        this.balle.setVelocityX(10)
        this.balle.setVelocityY(-100)
    }

    /**
     *
     * @param {Joueur} joueur
     */
    win(joueur) {
        //alert('Joueur '+joueur.name+' gagne')
        joueur.score++;
        //alert('Le score est de '+this.joueurGauche.score+' a '+this.joueurDroite.score)
        this.balleAucentre();
    }

    initKeyboard() {
        let me = this;
        this.input.keyboard.on('keydown', function (kevent) {
                switch (kevent.keyCode) {

                    case  Phaser.Input.Keyboard.KeyCodes.RIGHT:
                        me.raquette.setVelocityX(200)
                        break;
                    case Phaser.Input.Keyboard.KeyCodes.LEFT:
                        me.raquette.setVelocityX(-200)
                        break;

                }
            }
        );
        this.input.keyboard.on('keyup', function (kevent) {
                switch (kevent.keyCode) {
                    case Phaser.Input.Keyboard.KeyCodes.LEFT:
                        me.raquette.setVelocityX(0)
                        break;
                    case  Phaser.Input.Keyboard.KeyCodes.RIGHT:
                        me.raquette.setVelocityX(0)
                        break;

                }
            }
        );


    }



    update() {

        if (this.balle.y < 0) {
            this.balle.y = 0
        }
        if (this.balle.y > this.hauteur) {
            this.balle.y = this.hauteur
        }
        if (this.raquette.y < this.gauche.y + 20) {
            this.raquette.y = this.gauche.y + 20
        }

        if (this.raquette.y < this.droite.y + 20) {
            this.raquette.y = this.droite.y + 20
        }

        if (this.balle.y <0) {
            this.win(this.joueur);
        }
    }
}

