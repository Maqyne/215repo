<?php
/**
 * Author: Saad Islam
 * Date: 11/19/2019
 * File: data_length_exception.class.php
 * Description:
 */

class DataLengthException extends Exception
{
    public function getDetails()
    {
        return "Error: Password length needs to be at least 5 characters";
    }
}