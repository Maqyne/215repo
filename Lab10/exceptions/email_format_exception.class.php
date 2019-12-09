<?php
/**
 * Author: Saad Islam
 * Date: 11/19/2019
 * File: email_format_exception.class.php
 * Description:
 */

class EmailFormatException extends Exception
{
    public function getDetails(){
        return "Error: Invalid E-mail format.";
    }
}