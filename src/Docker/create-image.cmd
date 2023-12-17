docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proekt2/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t proekt2/app ../..
