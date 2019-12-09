<?php
/**
 * Author: Saad Islam
 * Date: 11/19/2019
 * File: data_missing_exception.class.php
 * Description:
 */

class DataMissingException extends Exception
{
    public function __construct($field)
    {
        parent::__construct("Error: Data missing in $field field");
    }
}