#============================================================= -*-perl-*-
#
# Template::Config
#
# DESCRIPTION
#   Template Toolkit configuration module.
#
# AUTHOR
#   Andy Wardley   <abw@wardley.org>
#
# COPYRIGHT
#   Copyright (C) 1996-2007 Andy Wardley.  All Rights Reserved.
#
#   This module is free software; you can redistribute it and/or
#   modify it under the same terms as Perl itself.
#
#========================================================================
 
package Template::Config;

use strict;
use warnings;
use base 'Template::Base';

our $VERSION   = '3.008';

our $DEBUG;
$DEBUG     = 0 unless defined $DEBUG;
our $ERROR     = '';
our $CONTEXT   = 'Template::Context';
our $FILTERS   = 'Template::Filters';
our $ITERATOR  = 'Template::Iterator';
our $PARSER    = 'Template::Parser';
our $PLUGINS   = 'Template::Plugins';
our $PROVIDER  = 'Template::Provider';
our $SERVICE   = 'Template::Service';
our $STASH;
$STASH     = 'Template::Stash::XS';
our $CONSTANTS = 'Template::Namespace::Constants';

our $LATEX_PATH;
our $PDFLATEX_PATH;
our $DVIPS_PATH;

our @PRELOAD   = ( $CONTEXT, $FILTERS, $ITERATOR, $PARSER,
               $PLUGINS, $PROVIDER, $SERVICE, $STASH );

# the following is set at installation time by the Makefile.PL 
our $INSTDIR  = '';


#========================================================================
#                       --- CLASS METHODS ---
#========================================================================

#------------------------------------------------------------------------
# preload($module, $module, ...)
#
# Preloads all the standard TT modules that are likely to be used, along
# with any other passed as arguments.
#------------------------------------------------------------------------

sub preload {
    my $class = shift;

    foreach my $module (@PRELOAD, @_) {
        $class->load($module) || return;
    };
    return 1;
}


#------------------------------------------------------------------------
# load($module)
#
# Load a module via require().  Any occurrences of '::' in the module name
# are be converted to '/' and '.pm' is appended.  Returns 1 on success
# or undef on error.  Use $class->error() to examine the error string.
#------------------------------------------------------------------------

sub load {
    my ($class, $module) = @_;
    $module =~ s[::][/]g;
    $module .= '.pm';
    return 1 if $INC{$module};
    eval { require $module; };
    return $@ ? $class->error("failed to load $module: $@") : 1;
}


#------------------------------------------------------------------------
# parser(\%params)
#
# Instantiate a new parser object of the class whose name is denoted by
# the package variable $PARSER (default: Template::Parser).  Returns
# a reference to a newly instantiated parser object or undef on error.
# The class error() method can be called without arguments to examine
# the error message generated by this failure.
#------------------------------------------------------------------------

sub parser {
    my $class  = shift;
    my $params = defined($_[0]) && ref($_[0]) eq 'HASH'
               ? shift : { @_ };

    return undef unless $class->load($PARSER);
    return $PARSER->new($params) 
        || $class->error("failed to create parser: ", $PARSER->error);
}


#------------------------------------------------------------------------
# provider(\%params)
#
# Instantiate a new template provider object (default: Template::Provider).
# Returns an object reference or undef on error, as above.
#------------------------------------------------------------------------

sub provider {
    my $class  = shift;
    my $params = defined($_[0]) && ref($_[0]) eq 'HASH' 
               ? shift : { @_ };

    return undef unless $class->load($PROVIDER);
    return $PROVIDER->new($params) 
        || $class->error("failed to create template provider: ",
                         $PROVIDER->error);
}


#------------------------------------------------------------------------
# plugins(\%params)
#
# Instantiate a new plugins provider object (default: Template::Plugins).
# Returns an object reference or undef on error, as above.
#------------------------------------------------------------------------

sub plugins {
    my $class  = shift;
    my $params = defined($_[0]) && ref($_[0]) eq 'HASH' 
               ? shift : { @_ };

    return undef unless $class->load($PLUGINS);
    return $PLUGINS->new($params)
        || $class->error("failed to create plugin provider: ",
                         $PLUGINS->error);
}


#------------------------------------------------------------------------
# filters(\%params)
#
# Instantiate a new filters provider object (default: Template::Filters).
# Returns an object reference or undef on error, as above.
#------------------------------------------------------------------------

sub filters {
    my $class  = shift;
    my $params = defined($_[0]) && ref($_[0]) eq 'HASH' 
               ? shift : { @_ };

    return undef unless $class->load($FILTERS);
    return $FILTERS->new($params)
        || $class->error("failed to create filter provider: ",
                         $FILTERS->error);
}


#------------------------------------------------------------------------
# iterator(\@list)
#
# Instantiate a new Template::Iterator object (default: Template::Iterator).
# Returns an object reference or undef on error, as above.
#------------------------------------------------------------------------

sub iterator {
    my $class = shift;
    my $list  = shift;

    return undef unless $class->load($ITERATOR);
    return $ITERATOR->new($list, @_)
        || $class->error("failed to create iterator: ", $ITERATOR->error);
}


#------------------------------------------------------------------------
# stash(\%vars)
#
# Instantiate a new template variable stash object (default: 
# Template::Stash). Returns object or undef, as above.
#------------------------------------------------------------------------

sub stash {
    my $class  = shift;
    my $params = defined($_[0]) && ref($_[0]) eq 'HASH' 
               ? shift : { @_ };

    return undef unless $class->load($STASH);
    return $STASH->new($params) 
        || $class->error("failed to create stash: ", $STASH->error);
}


#------------------------------------------------------------------------
# context(\%params)
#
# Instantiate a new template context object (default: Template::Context). 
# Returns object or undef, as above.
#------------------------------------------------------------------------

sub context {
    my $class  = shift;
    my $params = defined($_[0]) && ref($_[0]) eq 'HASH' 
               ? shift : { @_ };

    return undef unless $class->load($CONTEXT);
    return $CONTEXT->new($params) 
        || $class->error("failed to create context: ", $CONTEXT->error);
}


#------------------------------------------------------------------------
# service(\%params)
#
# Instantiate a new template context object (default: Template::Service). 
# Returns object or undef, as above.
#------------------------------------------------------------------------

sub service {
    my $class  = shift;
    my $params = defined($_[0]) && ref($_[0]) eq 'HASH' 
               ? shift : { @_ };

    return undef unless $class->load($SERVICE);
    return $SERVICE->new($params) 
        || $class->error("failed to create context: ", $SERVICE->error);
}


#------------------------------------------------------------------------
# constants(\%params)
#
# Instantiate a new namespace handler for compile time constant folding
# (default: Template::Namespace::Constants). 
# Returns object or undef, as above.
#------------------------------------------------------------------------

sub constants {
    my $class  = shift;
    my $params = defined($_[0]) && ref($_[0]) eq 'HASH' 
               ? shift : { @_ };

    return undef unless $class->load($CONSTANTS);
    return $CONSTANTS->new($params) 
        || $class->error("failed to create constants namespace: ", 
                         $CONSTANTS->error);
}


#------------------------------------------------------------------------
# instdir($dir)
#
# Returns the root installation directory appended with any local 
# component directory passed as an argument.
#------------------------------------------------------------------------

sub instdir {
    my ($class, $dir) = @_;
    my $inst = $INSTDIR 
        || return $class->error("no installation directory");
    chop $inst while substr($inst,-1) eq '/';
    $inst .= "/$dir" if $dir;
    return $inst;
}


#========================================================================
# This should probably be moved somewhere else in the long term, but for
# now it ensures that Template::TieString is available even if the 
# Template::Directive module hasn't been loaded, as is the case when 
# using compiled templates and Template::Parser hasn't yet been loaded
# on demand.
#========================================================================

#------------------------------------------------------------------------
# simple package for tying $output variable to STDOUT, used by perl()
#------------------------------------------------------------------------

package Template::TieString;

sub TIEHANDLE {
    my ($class, $textref) = @_;
    bless $textref, $class;
}
sub PRINT {
    my $self = shift;
    $$self .= join('', @_);
}



1;

__END__

=head1 NAME

Template::Config - Factory module for instantiating other TT2 modules

=head1 SYNOPSIS

    use Template::Config;

=head1 DESCRIPTION

This module implements various methods for loading and instantiating
other modules that comprise the Template Toolkit.  It provides a consistent
way to create toolkit components and allows custom modules to be used in 
place of the regular ones.

Package variables such as C<$STASH>, C<$SERVICE>, C<$CONTEXT>, etc., contain
the default module/package name for each component (L<Template::Stash>,
L<Template::Service> and L<Template::Context>, respectively) and are used by
the various factory methods (L<stash()>, L<service()> and L<context()>) to
load the appropriate module. Changing these package variables will cause
subsequent calls to the relevant factory method to load and instantiate an
object from the new class.

=head1 PUBLIC METHODS

=head2 load($module)

Load a module using Perl's L<require()>. Any occurrences of 'C<::>' in the
module name are be converted to 'C</>', and 'C<.pm>' is appended. Returns 1 on
success or undef on error.  Use C<$class-E<gt>error()> to examine the error
string.

=head2 preload()

This method preloads all the other C<Template::*> modules that are likely to
be used. It is called automatically by the L<Template> module when running
under mod_perl (C<$ENV{MOD_PERL}> is set).

=head2 parser(\%config)

Instantiate a new parser object of the class whose name is denoted by
the package variable C<$PARSER> (default: L<Template::Parser>).  Returns
a reference to a newly instantiated parser object or undef on error.

=head2 provider(\%config)

Instantiate a new template provider object (default: L<Template::Provider>).
Returns an object reference or undef on error, as above.

=head2 plugins(\%config)

Instantiate a new plugins provider object (default: L<Template::Plugins>).
Returns an object reference or undef on error, as above.

=head2 filters(\%config)

Instantiate a new filter provider object (default: L<Template::Filters>).
Returns an object reference or undef on error, as above.

=head2 stash(\%vars)

Instantiate a new stash object (L<Template::Stash> or L<Template::Stash::XS>
depending on the default set at installation time) using the contents of the
optional hash array passed by parameter as initial variable definitions.
Returns an object reference or undef on error, as above.

=head2 context(\%config)

Instantiate a new template context object (default: L<Template::Context>).
Returns an object reference or undef on error, as above.

=head2 service(\%config)

Instantiate a new template service object (default: L<Template::Service>).
Returns an object reference or undef on error, as above.

=head2 iterator(\%config)

Instantiate a new template iterator object (default: L<Template::Iterator>).
Returns an object reference or undef on error, as above.

=head2 constants(\%config)

Instantiate a new namespace handler for compile time constant folding
(default: L<Template::Namespace::Constants>). Returns an object reference or
undef on error, as above.

=head2 instdir($dir)

Returns the root directory of the Template Toolkit installation under
which optional components are installed.  Any relative directory specified
as an argument will be appended to the returned directory.

    # e.g. returns '/usr/local/tt2'
    my $ttroot = Template::Config->instdir()
        || die "$Template::Config::ERROR\n";

    # e.g. returns '/usr/local/tt2/templates'
    my $template = Template::Config->instdir('templates')
        || die "$Template::Config::ERROR\n";

Returns C<undef> and sets C<$Template::Config::ERROR> appropriately if the 
optional components of the Template Toolkit have not been installed.

=head1 AUTHOR

Andy Wardley E<lt>abw@wardley.orgE<gt> L<http://wardley.org/>

=head1 COPYRIGHT

Copyright (C) 1996-2007 Andy Wardley.  All Rights Reserved.

This module is free software; you can redistribute it and/or
modify it under the same terms as Perl itself.

=head1 SEE ALSO

L<Template>

=cut

# Local Variables:
# mode: perl
# perl-indent-level: 4
# indent-tabs-mode: nil
# End:
#
# vim: expandtab shiftwidth=4:
