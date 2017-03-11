# config valid only for current version of Capistrano
lock "3.7.2"

server 'ec2-54-94-137-141.sa-east-1.compute.amazonaws.com', port: 22, roles: [:web, :app, :db], primary: true

# Server configuration
set :application, "design"
set :repo_url,    "git@github.com:Drezbek/#{fetch(:application)}.git"
set :branch,      :master
set :user,        "deploy"

# General configuration
set :pty,           false
set :use_sudo,      false
set :stage,         :production
set :deploy_via,    :remote_cache
set :linked_files,  %w{config/database.yml config/secrets.yml}
# set :linked_files,  %w{}
set :linked_dirs,   %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system public/uploads}
set :deploy_to,     "/home/#{fetch(:user)}/apps/#{fetch(:application)}"
set :ssh_options,   { forward_agent: true, user: fetch(:user), keys: %w(~/.ssh/deploy_rsa.pub) }

# Capistrano::Rails options
set :rails_env, fetch(:stage)
set :migration_role, :app
set :migration_servers, -> { primary(fetch(:migration_role)) }
set :conditionally_migrate, false
set :assets_roles, [:web, :app]
set :assets_prefix, 'assets'
set :rails_assets_groups, nil
set :normalize_asset_timestamps, %w{public/images public/javascripts public/stylesheets}
set :keep_assets, nil


# Capistrano::Puma options
set :puma_user, fetch(:user)
set :puma_rackup, -> { File.join(current_path, 'config.ru') }
set :puma_state, "#{shared_path}/tmp/pids/puma.state"
set :puma_pid, "#{shared_path}/tmp/pids/puma.pid"
set :puma_bind, "unix://#{shared_path}/tmp/sockets/puma.sock"    #accept array for multi-bind
set :puma_default_control_app, "unix://#{shared_path}/tmp/sockets/pumactl.sock"
set :puma_conf, "#{shared_path}/puma.rb"
set :puma_access_log, "#{shared_path}/log/puma_access.log"
set :puma_error_log, "#{shared_path}/log/puma_error.log"
set :puma_role, :app
set :puma_env, fetch(:rack_env, fetch(:rails_env, 'production'))
set :puma_threads, [0, 16]
set :puma_workers, 0
set :puma_worker_timeout, nil
set :puma_init_active_record, false
set :puma_preload_app, false
set :puma_daemonize, true
set :puma_plugins, []  #accept array of plugins
set :nginx_use_ssl, false

# Capistrano::Puma jungle options
set :puma_jungle_conf, '/etc/puma.conf'
set :puma_run_path, '/usr/local/bin/run-puma'

# Capistrano::Puma nginx options
set :nginx_sites_available_path,  "/etc/nginx/sites-available"
set :nginx_sites_enabled_path,    "/etc/nginx/sites-enabled"

# Capistrano::rbenv options
set :rbenv_type, :user
#set :rbenv_ruby, '2.4.0'
set :rbenv_ruby, File.read('.ruby-version').strip
set :rbenv_path, '/home/deploy/.rbenv'
set :rbenv_prefix, "RBENV_ROOT=#{fetch(:rbenv_path)} RBENV_VERSION=#{fetch(:rbenv_ruby)} #{fetch(:rbenv_path)}/bin/rbenv exec"
set :rbenv_map_bins, %w{rake gem bundle ruby rails}
set :rbenv_roles, :all

# Capistrano::Bundler options
#set :bundle_bins,           fetch(:bundle_bins, []).push('my_new_binary')
set :bundle_roles,          :all
set :bundle_servers,        -> { release_roles(fetch(:bundle_roles)) }
set :bundle_binstubs,       -> { shared_path.join('bin') }
set :bundle_gemfile,        -> { release_path.join('Gemfile') }
set :bundle_path,           -> { shared_path.join('bundle') }
set :bundle_without,        %w{development test}.join(' ')
set :bundle_flags,          '--deployment --quiet'
set :bundle_env_variables,  {}
set :bundle_clean_options,  ""
set :bundle_jobs,           nil
set :bundle_binstubs,       -> { shared_path.join('bin') }
set :bundle_env_variables,  { }


