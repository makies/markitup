<?php
/**
 * Configuration
 */
    Configure::write('Markitup.actions', array(
        'Nodes/admin_add' => array(
            array(
                'elements' => 'NodeBody',
            ),
        ),
        'Nodes/admin_edit' => array(
            array(
                'elements' => 'NodeBody',
            ),
        ),
        'Translate/admin_edit' => array(
            array(
                'elements' => 'NodeBody',
            ),
        ),
    ));

/**
 * Hook helper
 */
    foreach (Configure::read('Markitup.actions') AS $action => $settings) {
        $actionE = explode('/', $action);
        Croogo::hookHelper($actionE['0'], 'Markitup.Markitup');
    }
    Croogo::hookHelper('Attachments', 'Markitup.Markitup');

?>