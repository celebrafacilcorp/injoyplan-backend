import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FavoritesService {
  constructor(private prisma: PrismaService) {}

  async addFavorite(userId: string, eventId: string) {
    const event = await this.prisma.event.findUnique({
      where: { id: eventId },
    });

    if (!event) {
      throw new NotFoundException('Evento no encontrado');
    }

    const existing = await this.prisma.favorite.findUnique({
      where: {
        userId_eventId: {
          userId,
          eventId,
        },
      },
    });

    if (existing) {
      throw new ConflictException('El evento ya está en favoritos');
    }

    return this.prisma.favorite.create({
      data: {
        userId,
        eventId,
      },
      include: {
        event: {
          include: {
            user: {
              include: {
                profile: true,
              },
            },
            location: true,
            dates: true,
          },
        },
      },
    });
  }

  async removeFavorite(userId: string, favoriteId: string) {
    const favorite = await this.prisma.favorite.findUnique({
      where: { id: favoriteId },
    });

    if (!favorite) {
      throw new NotFoundException('Favorito no encontrado');
    }

    if (favorite.userId !== userId) {
      throw new NotFoundException('Favorito no encontrado');
    }

    await this.prisma.favorite.delete({
      where: { id: favoriteId },
    });

    return { message: 'Favorito eliminado exitosamente' };
  }

  async removeFavoriteByEvent(userId: string, eventId: string) {
    const favorite = await this.prisma.favorite.findUnique({
      where: {
        userId_eventId: {
          userId,
          eventId,
        },
      },
    });

    if (!favorite) {
      throw new NotFoundException('Favorito no encontrado');
    }

    await this.prisma.favorite.delete({
      where: { id: favorite.id },
    });

    return { message: 'Favorito eliminado exitosamente' };
  }

  async getFavorites(userId: string, page: number = 1, limit: number = 20) {
    const skip = (page - 1) * limit;

    const [favorites, total] = await Promise.all([
      this.prisma.favorite.findMany({
        where: { userId },
        include: {
          event: {
            include: {
              user: {
                include: {
                  profile: true,
                },
              },
              location: true,
              dates: true,
              _count: {
                select: {
                  favorites: true,
                },
              },
            },
          },
        },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.favorite.count({
        where: { userId },
      }),
    ]);

    return {
      data: favorites,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }
}
