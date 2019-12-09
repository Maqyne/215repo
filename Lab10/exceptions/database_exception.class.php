<?php
/**
 * Author: Saad Islam
 * Date: 11/19/2019
 * File: database_exception.class.php
 * Description:
 */

class DatabaseException extends Exception
{
    public function __construct($error)
    {
        parent::__construct("Error: Database error <br> $error");
    }
}