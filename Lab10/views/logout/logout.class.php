<?php
/*
 * Author: Louie Zhu
 * Date: 9/25/2018
 * Name: login.class.php
 * Description: This class defines a method "display" that displays a logout message.
 */

class Logout extends View {

    public function display() {
        parent::header();
        ?>
        <div class="top-row">Login</div>
        <div class="middle-row">
            <p>You have successfully logged out.</p>
        </div>
        <div class="bottom-row">
                 <span style="float: left">Already have an account? <a href="index.php?action=login">Login</a></span>
                <span style="float: right">Don't have an account? <a href="index.php">Register</a></span>
        </div>

        <?php
        parent::footer();
    }

}
